import type React from "react"
import { AppHeader } from "@/components/app-header"
import { BottomNav } from "@/components/bottom-nav"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      {/* Medical Disclaimer Banner */}
      <div className="bg-white border-b border-destructive/30 py-2">
        <div className="px-4">
          <p className="text-sm text-center text-destructive font-medium">
            ⚠️ Medical Disclaimer: This app is for informational purposes only. Always consult a healthcare provider.
          </p>
        </div>
      </div>

      {/* Main Content with bottom padding for navigation */}
      <main className="pb-20">{children}</main>

      <BottomNav />
    </div>
  )
}
