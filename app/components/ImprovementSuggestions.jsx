import Card from "./Card"

export default function ImprovementSuggestions({ data }) {

  if(!data.missing_elements) return null

  return (

    <Card title="Suggested Improvements">

      <ul className="list-disc ml-6 text-gray-300">

        {data.missing_elements.map((item,i)=>(
          <li key={i}>
            Consider defining: {item}
          </li>
        ))}

      </ul>

    </Card>

  )
}