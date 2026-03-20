import Card from "./Card"

export default function StructuredPlan({ data }) {

  return (
    <Card title="Structured Plan">

      <p><strong>Goal:</strong> {data.goal}</p>

      <p className="mt-2"><strong>Method:</strong> {data.method}</p>

      <div className="mt-4">

        <p className="font-semibold">Steps</p>

        <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-300">
          {data.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

      </div>

      <p className="mt-4"><strong>Timeline:</strong> {data.timeline}</p>

    </Card>
  )
}