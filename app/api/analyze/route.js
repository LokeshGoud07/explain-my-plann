import { NextResponse } from "next/server"
import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function POST(req) {
  try {

    const { idea } = await req.json()

    if (!idea) {
      return NextResponse.json(
        { error: "Idea is required" },
        { status: 400 }
      )
    }

    const prompt = `
You are an AI assistant that converts messy ideas into structured execution plans.

Return ONLY valid JSON with this structure:

{
  "goal": "",
  "method": "",
  "steps": [],
  "timeline": "",
  "missing_elements": [],
  "simplified_plan": "",
  "next_steps": []
}

User Idea:
${idea}
`

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.3
    })

    const text = completion.choices[0].message.content

    const jsonMatch = text.match(/\{[\s\S]*\}/)

    if (!jsonMatch) {
      throw new Error("AI did not return JSON")
    }

    const parsed = JSON.parse(jsonMatch[0])

    return NextResponse.json(parsed)

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}