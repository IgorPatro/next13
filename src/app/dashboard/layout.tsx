import React from "react"
import Link from "next/link"

interface Props {
  children: React.ReactNode
}

const LayoutPage = ({ children }: Props) => {
  return (
    <div>
      <h2>Layout #2</h2>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/dashboard/analytics">Analytics</Link>
      <br />
      <Link href="/dashboard/settings">Settings</Link>
      {children}
    </div>
  )
}

export default LayoutPage
