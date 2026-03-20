import Card from "./Card"

export default function ClarityScore({ data }) {

  let score = 0

  // Goal clarity
  if (data.goal && data.goal.length > 10) score += 20

  // Method defined
  if (data.method && data.method.length > 10) score += 15

  // Steps quality
  if (data.steps?.length >= 5) score += 25
  else if (data.steps?.length >= 3) score += 15
  else if (data.steps?.length >= 1) score += 5

  // Timeline
  if (data.timeline && data.timeline !== "Not specified") score += 20

  // Missing elements penalty
  const missingCount = data.missing_elements?.length || 0

  if (missingCount === 0) score += 20
  else if (missingCount === 1) score += 15
  else if (missingCount === 2) score += 10
  else if (missingCount === 3) score += 5
  else score += 0

  if (score > 100) score = 100

  return (

    <Card title="Clarity Score">

      <div className="w-full bg-gray-700 rounded-full h-4">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${score}%` }}
        />

      </div>

      <p className="mt-3 text-xl font-semibold">
        {score} / 100
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Score based on goal clarity, steps completeness, timeline presence, and missing elements.
      </p>

    </Card>

  )
}