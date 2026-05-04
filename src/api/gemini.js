import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const generateContent = async (prompt) => {
  const res = await ai.models.generateContent({
    // model: "gemini-2.5-flash",
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  return res.text;
};
