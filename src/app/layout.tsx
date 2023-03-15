import React from "react"
import Navigation from "@/components/Navigation/Navigation"
import "@/styles/globals.css"

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <nav className="w-full">
          <Navigation />
        </nav>
        <button className="btn btn-primary">TEST</button>
        {children}
      </body>
    </html>
  )
}

export default RootLayout

