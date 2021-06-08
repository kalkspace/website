import { Handler } from "@netlify/functions";

interface Payload {
  post: {
    post_number: number;
  };
}

const handler: Handler = async (event, context) => {
  const payload = JSON.parse(event.body) as Payload;
  if (payload.post.post_number === 1) {
    console.log("Erster Post", payload);
  } else {
    console.log("Anderer Post", payload);
  }

  return {
    statusCode: 200,
    body: "",
  };
};

export { handler };
