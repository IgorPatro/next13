import React from "react"
import Link from "next/link"

const DashboardPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const json = await data.json()

  return (
    <div>
      <h1>DashboardPage</h1>
      <p>{json.title}</p>
    </div>
  )
}

export default DashboardPage
