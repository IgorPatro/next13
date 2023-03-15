"use client"

import React from "react"

interface Props {
  error: any
  reset: () => void
}

const ErrorBoundary = ({ error, reset }: Props) => {
  console.log("ErrorBoundary", error, reset)

  return (
    <div>
      ErrorBoundary
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ErrorBoundary
