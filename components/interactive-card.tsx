"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  pressEffect?: boolean
  glowEffect?: boolean
  onClick?: () => void
}

export function InteractiveCard({
  children,
  className,
  pressEffect = true,
  glowEffect = false,
  onClick,
}: InteractiveCardProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <Card
      className={cn(
        "transition-all duration-200 cursor-pointer",
        pressEffect && "active:scale-95 hover:scale-[1.02]",
        glowEffect && "hover:shadow-lg hover:shadow-primary/20",
        "transform-gpu", // Hardware acceleration
        className,
      )}
      onMouseDown={() => pressEffect && setIsPressed(true)}
      onMouseUp={() => pressEffect && setIsPressed(false)}
      onMouseLeave={() => pressEffect && setIsPressed(false)}
      onTouchStart={() => pressEffect && setIsPressed(true)}
      onTouchEnd={() => pressEffect && setIsPressed(false)}
      onClick={onClick}
    >
      {children}
    </Card>
  )
}
