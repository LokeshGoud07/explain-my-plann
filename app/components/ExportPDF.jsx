"use client"

import { useEffect, useState } from "react"

export default function ExportPDF() {

  const [html2pdf, setHtml2pdf] = useState(null)

  // load library only in browser
  useEffect(() => {
    import("html2pdf.js").then((module) => {
      setHtml2pdf(() => module.default)
    })
  }, [])

  const download = () => {

    if (!html2pdf) return

    const element = document.body

    html2pdf()
      .from(element)
      .save("plan.pdf")

  }

  return (
    <button
      onClick={download}
      className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md"
    >
      Export Plan as PDF
    </button>
  )
}