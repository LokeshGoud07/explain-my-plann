import Card from "./Card"

export default function NextSteps({ data }) {

  return (

    <Card title="Actionable Next Steps">

      <ul className="list-disc ml-6 space-y-1 text-gray-300">
        {data.next_steps.map((step,i)=>(
          <li key={i}>{step}</li>
        ))}
      </ul>

    </Card>

  )
}