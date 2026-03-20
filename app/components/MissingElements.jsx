import Card from "./Card"

export default function MissingElements({ data }) {

  return (

    <Card title="Missing Elements">

      <ul className="list-disc ml-6 space-y-1 text-gray-300">
        {data.missing_elements.map((item,i)=>(
          <li key={i}>{item}</li>
        ))}
      </ul>

    </Card>

  )
}