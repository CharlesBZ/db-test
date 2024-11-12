"use client"

import { FC } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const getUser = async () => {
    await fetch("/api/user")
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={getUser}
    >
      Get The User Oh yeah baby!
    </button>
  )
}

export default page
