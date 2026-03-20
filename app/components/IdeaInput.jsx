"use client"

import { useState } from "react"

export default function IdeaInput({ onAnalyze }) {

  const [idea, setIdea] = useState("")

  const submit = () => {
    if (!idea.trim()) return
    onAnalyze(idea)
  }

  return (

    <div className="bg-slate-900 border border-gray-700 p-6 rounded-lg shadow">

      <h2 className="text-xl font-semibold mb-4">
        Describe Your Idea
      </h2>

      <textarea
        className="w-full bg-slate-950 border border-gray-600 p-3 rounded-md h-32"
        placeholder="Example: I want to start a YouTube channel and earn money quickly"
        value={idea}
        onChange={(e)=>setIdea(e.target.value)}
      />

      <button
        onClick={submit}
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md"
      >
        Analyze Plan
      </button>

    </div>

  )
}