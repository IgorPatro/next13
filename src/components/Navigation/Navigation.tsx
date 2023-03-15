import React from "react"
import Image from "next/image"
import logo from "@/assets/images/logo.svg"

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between p-4">
      <Image src={logo} alt="Logo" />
      <button className="rounded-lg bg-orange-400 px-4 py-2 font-bold text-white">
        WYSTAW
      </button>
    </nav>
  )
}

export default Navigation
