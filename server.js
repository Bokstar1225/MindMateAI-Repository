import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const response = openai.responses.create({
  model: "gpt-5-nano",
  input: "write a haiku about ai",
  store: true,
});

response.then((result) => console.log(result.output_text));