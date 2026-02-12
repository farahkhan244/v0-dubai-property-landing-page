"use client"

import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 py-4 px-4">
      <div className="flex justify-center">
        <Link href="/" aria-label="Stage Properties - Home">
          <img
            src="/stage-logo-white.png"
            alt="Stage Properties"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  )
}
