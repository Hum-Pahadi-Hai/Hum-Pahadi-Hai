"use client"

import { useState } from "react"
import { Menu, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/symptom-checker", label: "Symptom Checker" },
    { href: "/diseases", label: "Diseases" },
    { href: "/diet", label: "Diet & Nutrition" },
    { href: "/prevention", label: "Prevention" },
    { href: "/glossary", label: "Glossary" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" size="sm" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center space-x-2 pb-6 border-b">
            <Heart className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">MediGuide</h1>
              <p className="text-xs text-muted-foreground">by Hemu</p>
            </div>
          </div>

          <nav className="flex flex-col space-y-4 mt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t">
            <Button variant="destructive" className="w-full">
              Emergency: Call 911
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
