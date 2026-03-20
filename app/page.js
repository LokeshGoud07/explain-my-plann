"use client"

import { useState } from "react"

import IdeaInput from "./components/IdeaInput"
import StructuredPlan from "./components/StructuredPlan"
import MissingElements from "./components/MissingElements"
import NextSteps from "./components/NextSteps"
import ClarityScore from "./components/ClarityScore"
import BeforeAfter from "./components/BeforeAfter"
import ImprovementSuggestions from "./components/ImprovementSuggestions"
import ExportPDF from "./components/ExportPDF"

export default function Home() {

  const [result, setResult] = useState(null)
  const [idea, setIdea] = useState("")
  const [loading, setLoading] = useState(false)

  const analyzeIdea = async (inputIdea) => {

    setIdea(inputIdea)
    setLoading(true)

    try {

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idea: inputIdea })
      })

      const data = await response.json()

      setResult(data)

    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">

      {/* Header */}

      <div className="border-b border-gray-700 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-6">

          <h1 className="text-4xl font-bold text-white">
            Explain My Plan
          </h1>

          <p className="text-gray-400 mt-1">
            Turn vague ideas into structured execution plans using AI
          </p>

        </div>
      </div>


      {/* Main Content */}

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

        <IdeaInput onAnalyze={analyzeIdea} />

        {loading && (

          <div className="flex items-center gap-3 text-blue-400">

            <div className="animate-spin h-5 w-5 border-2 border-blue-400 border-t-transparent rounded-full"></div>

            AI analyzing your idea...

          </div>

        )}

        {result && (

          <>
            {/* Export Button */}

            <div className="flex justify-end">
              <ExportPDF />
            </div>


            {/* Dashboard */}

            <div className="grid md:grid-cols-2 gap-6">

              {/* Left Column */}

              <div className="space-y-6">

                <BeforeAfter
                  idea={idea}
                  simplified={result.simplified_plan}
                />

                <StructuredPlan data={result} />

              </div>


              {/* Right Column */}

              <div className="space-y-6">

                <MissingElements data={result} />

                <NextSteps data={result} />

                <ClarityScore data={result} />

                <ImprovementSuggestions data={result} />

              </div>

            </div>
          </>
        )}

      </div>

    </div>
  )
}