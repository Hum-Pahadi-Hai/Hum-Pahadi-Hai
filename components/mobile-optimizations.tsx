"use client"

import { useEffect } from "react"

export function MobileOptimizations() {
  useEffect(() => {
    // Prevent zoom on input focus (iOS Safari)
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      )
    }

    // Add mobile-specific CSS custom properties
    const root = document.documentElement
    root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)

    // Update on resize
    const updateVH = () => {
      root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
    }

    window.addEventListener("resize", updateVH)
    window.addEventListener("orientationchange", updateVH)

    // Simulate haptic feedback for supported devices
    const addHapticFeedback = () => {
      if ("vibrate" in navigator) {
        navigator.vibrate(10) // Light haptic feedback
      }
    }

    // Add haptic feedback to interactive elements
    const interactiveElements = document.querySelectorAll('button, [role="button"], a, input, textarea, select')

    interactiveElements.forEach((element) => {
      element.addEventListener("touchstart", addHapticFeedback, { passive: true })
    })

    return () => {
      window.removeEventListener("resize", updateVH)
      window.removeEventListener("orientationchange", updateVH)
      interactiveElements.forEach((element) => {
        element.removeEventListener("touchstart", addHapticFeedback)
      })
    }
  }, [])

  return null
}
