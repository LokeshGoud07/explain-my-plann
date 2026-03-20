import Card from "./Card"

export default function BeforeAfter({ idea, simplified }) {

  return (

    <Card title="Idea Improvement">

      <p className="font-semibold">Original Idea</p>
      <p className="text-gray-300">{idea}</p>

      <p className="font-semibold mt-4">Improved Plan</p>
      <p className="text-gray-300">{simplified}</p>

    </Card>

  )
}