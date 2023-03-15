import React from "react"
import Link from "next/link"

const DashboardPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const json = await data.json()

  const mockData = (await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Hello World",
      })
    }, 5000)
  })) as { title: string }

  return (
    <div>
      <h1>DashboardPage</h1>
      <p>{json.title}</p>
      <p>{mockData.title}</p>
      <p>{{ test: true } as any}</p>
    </div>
  )
}

export default DashboardPage
