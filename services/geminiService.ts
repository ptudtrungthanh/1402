import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini AI client
// Note: API Key must be set in the environment variables (process.env.API_KEY)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a short romantic poem or message.
 * This can be used if you want to extend the Letter Slide to generate custom messages.
 */
export const generateRomanticMessage = async (recipientName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, very romantic 4-line poem in Vietnamese for a girl named ${recipientName} for Valentine's Day. Be sweet and emotional.`,
    });
    return response.text || "Yêu em mãi mãi!";
  } catch (error) {
    console.error("Error generating message:", error);
    return "Yêu em nhiều hơn lời nói!";
  }
};
