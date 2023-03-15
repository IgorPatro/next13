import React from "react"
import "../styles/globals.css"

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li className="underline">Home</li>
            <li>Blog</li>
            <li>Dashboard</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

export default RootLayout

