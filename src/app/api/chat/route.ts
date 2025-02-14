import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        console.log("🔍 Received messages:", messages);

        const result = await streamText({
            model: openai('gpt-4o-mini'),
            messages,
        });

        console.log("🔍 OpenAI response:", result);

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("❌ OpenAI request failed:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}


