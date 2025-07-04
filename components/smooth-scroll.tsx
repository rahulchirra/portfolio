"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement
      const href = target.getAttribute("href")

      if (href && href.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(href)

        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Add smooth scrolling to all anchor links
    document.addEventListener("click", handleSmoothScroll)

    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
