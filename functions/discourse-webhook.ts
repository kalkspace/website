import { Handler } from "@netlify/functions";
import { createHmac } from "crypto";
import fetch from "node-fetch";

interface Payload {
  post?: {
    id?: number;
    post_number?: number;
  };
}

const handler: Handler = async (event) => {
  const headerName = "X-Discourse-Event-Signature";
  const [, expected] =
    Object.entries(event.headers).find(
      ([key]) => key.toLowerCase() === headerName.toLowerCase()
    ) ?? [];

  const discourseWebhookSecret = process?.env?.DISCOURSE_WEBHOOK_SECRET;
  if (!discourseWebhookSecret) {
    throw new Error("Missing DISCOURSE_WEBHOOK_SECRET");
  }
  const hmac = createHmac("sha256", discourseWebhookSecret);
  hmac.update(event.body ?? "");
  const hashedPayload = hmac.digest("hex");
  const actual = `sha256=${hashedPayload}`;

  if (actual !== expected) {
    return {
      statusCode: 403,
    };
  }

  let payload: Payload | undefined;
  try {
    payload = JSON.parse(event.body ?? "");
  } catch (error) {
    return {
      statusCode: 400,
    };
  }

  const postId = payload?.post?.id;
  console.info("Received webhook request", { postId });

  if (payload?.post?.post_number === 1) {
    // This is the initial post of the topic

    const discourseBuildHook = process?.env?.DISCOURSE_BUILD_HOOK;
    if (!discourseBuildHook) {
      throw new Error("Missing DISCOURSE_BUILD_HOOK");
    }
    const response = await fetch(discourseBuildHook);
    if (!response.ok) {
      console.error("Triggering build failed", {
        status: response.status,
        body: await response.text(),
      });
      return {
        statusCode: 502,
      };
    }
  } else {
    console.info(
      "This was not the initial post of the topic. It cannot contain an event, so we are ignoring it."
    );
  }

  return {
    statusCode: 200,
    body: "",
  };
};

export { handler };
