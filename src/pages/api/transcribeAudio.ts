import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import * as fs from "fs";
const { Configuration, OpenAIApi } = require("openai");

type Data = {
  text: String;
};

// GET base-url/api/transcribeAudio
// POST base-url/api/transcribeAudio | body {formData - (file,model,language)}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { method, body } = req;
  if (method === "GET") {
    res
      .status(200)
      .json({ text: "This endpoint is for Speech-to-Text conversion" });
  } else if (method === "POST") {
    const file: string = req.body;
    console.log(file);
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const resp = await openai.createTranscription(
      fs.createReadStream("/home/harshil/Downloads/speech.mp3"),
      "whisper-1"
    );
    res.status(200).json({ text: resp.data.text });
  } else {
    res.status(405).json({ text: "Method not allowed" });
  }
}