"use strict";
import Groq from "groq-sdk";
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
export const sendMsgToMistralAI = async (msg) => {
  const res = await groq.chat.completions.create({
    model: "mixtral-8x7b-32768",
    messages: [{ role: "user", content: msg }],
  });
  return res.choices[0].message.content;
};
