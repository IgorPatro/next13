import React from "react"

interface Props {
  children: React.ReactNode
}

const LayoutPage = ({ children }: Props) => {
  return (
    <div>
      <h3>Layout #3</h3>
      {children}
    </div>
  )
}

export default LayoutPage
