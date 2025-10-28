import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { characters, masterPrompt } from "../../../data/characters";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { message, characterId } = await req.json();

    const character = characters.find((c) => c.id === characterId);
    if (!character) return NextResponse.json({ error: "Character not found" }, { status: 400 });

    const prompt = masterPrompt.replace("ROLE_NAME", character.name);

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 120,
    });

    return NextResponse.json({ reply: response.choices[0].message?.content || "" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
