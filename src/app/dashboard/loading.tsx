import React from "react"
import Image from "next/image"

const LoadingState = () => {
  return (
    <div>
      <Image
        src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
        alt="spinner"
        width={200}
        height={200}
      />
    </div>
  )
}

export default LoadingState
