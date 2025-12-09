import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface StrategyResult {
  headline: string;
  hooks: string[];
  hashtags: string[];
}

export const generateSocialStrategy = async (brandName: string, industry: string): Promise<StrategyResult> => {
  try {
    const prompt = `
      Act as a world-class social media strategist for RNT Studio.
      Create a quick, high-impact social media strategy snippet for a brand.
      
      Brand Name: ${brandName}
      Industry: ${industry}
      
      IMPORTANT: The output must be in Spanish.
      
      Output JSON with the following structure:
      {
        "headline": "A catchy 1-sentence value proposition for their bio (in Spanish)",
        "hooks": ["3 viral video hook ideas specific to their niche (in Spanish)"],
        "hashtags": ["5 relevant, high-traffic hashtags"]
      }
      
      Keep the tone trendy, professional, and "viral-ready".
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as StrategyResult;
  } catch (error) {
    console.error("Error generating strategy:", error);
    return {
      headline: "Eleva tu presencia digital con RNT Studio.",
      hooks: ["Un día en la vida...", "3 Secretos sobre...", "Cómo transformamos..."],
      hashtags: ["#viral", "#crecimiento", "#redessociales"]
    };
  }
};