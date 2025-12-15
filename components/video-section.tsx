"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section className="relative w-full">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-6 h-9 border-2 border-white text-white hover:bg-white hover:text-background bg-transparent backdrop-blur-sm transition-all hover:scale-105 duration-300"
          asChild
        >
          <a href="tel:+971528272886">Call Now</a>
        </Button>
      </div>

      <video
        ref={videoRef}
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_3761429587-h1o9jpFTy7Etu7hStHANgdY5jQuIbq.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
