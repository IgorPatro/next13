import React from "react"
import { prisma } from "@/server/prisma"

const HomePage = async () => {
  const users = await prisma.user.findMany()

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default HomePage

