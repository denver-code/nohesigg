"use client"

import { useEffect, useState } from "react"
import Image from "next/image"


export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black">
      <div className="relative h-32 w-32">
        <Image src="/loading_gif.gif" alt="Loading..." fill priority unoptimized className="object-contain" />
      </div>
    </div>
  )
}

