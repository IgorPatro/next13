import React from "react"

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>Home</li>
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

