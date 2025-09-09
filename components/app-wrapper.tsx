import type React from "react"
import { AppHeader } from "@/components/app-header"
import { BottomNav } from "@/components/bottom-nav"
import { MobileOptimizations } from "@/components/mobile-optimizations"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="min-h-screen bg-background">
      <MobileOptimizations />

      <AppHeader />

      {/* Medical Disclaimer Banner */}
      <div className="bg-white border-b border-destructive/30 py-3 px-4 safe-area-inset-x">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-center text-destructive font-medium leading-relaxed">
            ⚠️ Medical Disclaimer: This app is for informational purposes only. Always consult a healthcare provider.
          </p>
        </div>
      </div>

      <main className="pb-24 safe-area-inset-x min-h-[calc(100vh-140px)]">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>

      <BottomNav />
    </div>
  )
}
