
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Removed global initialization of GoogleGenAI to ensure instances are created right before use as per guidelines.

export const generateItinerary = async (prompt: string) => {
    // Fix: Initializing GoogleGenAI instance inside the function using process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
            systemInstruction: "You are StayNest AI, a world-class travel concierge. Focus on unique 'hidden gems' and allergy safety. Return a JSON array of 3 activities. Each object MUST have: 'activity' (string), 'time' (string), 'location' (string), 'safetyNote' (string), and 'reason' (string).",
            responseMimeType: "application/json",
            // Fix: Added responseSchema to improve structure reliability and adherence to JSON guidelines.
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        activity: { type: Type.STRING },
                        time: { type: Type.STRING },
                        location: { type: Type.STRING },
                        safetyNote: { type: Type.STRING },
                        reason: { type: Type.STRING }
                    },
                    required: ["activity", "time", "location", "safetyNote", "reason"]
                }
            }
        },
    });
    try {
        // Fix: Accessing .text property directly instead of .text() method.
        return JSON.parse(response.text || '[]');
    } catch (e) {
        console.error("Failed to parse AI itinerary", e);
        return [];
    }
};

export const getWeatherGearTips = async (location: string) => {
    // Fix: Initializing GoogleGenAI instance inside the function using process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Location: ${location}. Provide travel gear tips.`,
        config: {
            systemInstruction: "You are a smart travel assistant. Return JSON with a 'tip' (string, max 15 words) and a 'gear' array of 2 objects with 't' (title), 's' (subtitle), and 'i' (material symbol icon name).",
            responseMimeType: "application/json",
            // Fix: Added responseSchema for structured JSON requirements.
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    tip: { type: Type.STRING },
                    gear: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                t: { type: Type.STRING },
                                s: { type: Type.STRING },
                                i: { type: Type.STRING }
                            },
                            required: ["t", "s", "i"]
                        }
                    }
                },
                required: ["tip", "gear"]
            }
        },
    });
    try {
        // Fix: Accessing .text property directly.
        return JSON.parse(response.text || '{}');
    } catch (e) {
        return { tip: "Check local conditions before heading out.", gear: [] };
    }
};

export const draftJournalEntry = async (description: string, tone: string) => {
    // Fix: Initializing GoogleGenAI instance inside the function.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Draft a ${tone} travel journal entry about: ${description}`,
        config: {
            systemInstruction: "You are a creative travel writer. Create engaging, evocative journal entries based on user descriptions.",
        },
    });
    // Fix: Accessing .text property directly.
    return response.text;
};

export const chatWithConcierge = async (message: string) => {
    // Fix: Initializing GoogleGenAI instance inside the function.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
            systemInstruction: "You are the StayNest Plus Priority Concierge. You are helpful, professional, and can assist with everything from restaurant bookings to emergency medical advice (with clear disclaimers).",
        },
    });
    // Fix: Accessing .text property directly.
    return response.text;
};

export const getAIRecommendation = async (prompt: string) => {
    // Fix: Initializing GoogleGenAI instance inside the function.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
            systemInstruction: "You are a travel expert giving short, punchy 1-sentence recommendations.",
        },
    });
    // Fix: Accessing .text property directly.
    return response.text;
};
