"use client"

import { useState } from "react"
import { Plus, MessageCircle, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: Search,
      label: "Symptom Checker",
      href: "/symptom-checker",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: MessageCircle,
      label: "Contact Support",
      href: "/contact",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Phone,
      label: "Emergency",
      href: "tel:112",
      color: "bg-red-500 hover:bg-red-600",
    },
  ]

  return (
    <div className="fixed bottom-24 right-4 z-50">
      {/* Action buttons */}
      <div
        className={cn(
          "flex flex-col-reverse space-y-reverse space-y-3 mb-3 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <div
              key={action.label}
              className="flex items-center space-x-3"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : `${(actions.length - index) * 50}ms`,
              }}
            >
              <div className="bg-background px-3 py-1 rounded-full shadow-lg border text-sm font-medium whitespace-nowrap">
                {action.label}
              </div>
              <Button
                size="sm"
                className={cn(
                  "h-12 w-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110",
                  action.color,
                )}
                asChild
              >
                <Link href={action.href}>
                  <Icon className="h-5 w-5 text-white" />
                </Link>
              </Button>
            </div>
          )
        })}
      </div>

      {/* Main FAB */}
      <Button
        size="lg"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-110",
          isOpen && "rotate-45",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Plus className="h-6 w-6 text-white" />
      </Button>
    </div>
  )
}
