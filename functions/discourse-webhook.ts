import { Handler } from "@netlify/functions";
import { createHmac } from "crypto";

interface Payload {
  post: {
    post_number: number;
  };
}

const handler: Handler = async (event, context) => {
  const headerName = "X-Discourse-Event-Signature";
  const [, expected] =
    Object.entries(event.headers).find(
      ([key]) => key.toLowerCase() === headerName.toLowerCase()
    ) ?? [];

  const hmac = createHmac("sha256", process.env.DISCOURSE_WEBHOOK_SECRET);
  hmac.update(event.body);
  const hashedPayload = hmac.digest("hex");
  const actual = `sha256=${hashedPayload}`;

  if (actual !== expected) {
    return {
      statusCode: 403,
    };
  }

  const payload = JSON.parse(event.body) as Payload;

  if (payload.post.post_number === 1) {
    console.log("Erster Post", payload);
  } else {
    console.log("Anderer Post", payload);
  }

  console.log(hmac.digest("hex"));

  return {
    statusCode: 200,
    body: "",
  };
};

export { handler };
