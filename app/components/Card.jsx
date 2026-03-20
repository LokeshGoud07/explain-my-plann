export default function Card({ title, children }) {
  return (
    <div className="bg-slate-900 border border-gray-700 p-6 rounded-xl shadow-lg">

      {title && (
        <h2 className="text-xl font-semibold mb-4 text-blue-400">
          {title}
        </h2>
      )}

      {children}

    </div>
  )
}