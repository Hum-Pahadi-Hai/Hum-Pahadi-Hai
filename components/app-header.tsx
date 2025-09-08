"use client"

import { Heart, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlobalSearch } from "@/components/global-search"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-lg font-bold text-foreground">MediGuide</h1>
            <p className="text-xs text-muted-foreground">by Hemu</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <GlobalSearch />
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
