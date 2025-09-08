"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { diseases } from "@/lib/diseases-data"
import { symptoms } from "@/lib/symptom-data"
import { medicalTerms } from "@/lib/glossary-data"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "disease" | "symptom" | "term"
  href: string
}

interface GlobalSearchProps {
  trigger?: React.ReactNode
  placeholder?: string
}

export function GlobalSearch({
  trigger,
  placeholder = "Search symptoms, diseases, or conditions...",
}: GlobalSearchProps) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return []

    const results: SearchResult[] = []
    const query = searchTerm.toLowerCase()

    // Search diseases
    diseases.forEach((disease) => {
      if (
        disease.name.toLowerCase().includes(query) ||
        disease.description.toLowerCase().includes(query) ||
        disease.symptoms.some((symptom) => symptom.toLowerCase().includes(query))
      ) {
        results.push({
          id: disease.id,
          title: disease.name,
          description: disease.description,
          type: "disease",
          href: `/diseases/${disease.id}`,
        })
      }
    })

    // Search symptoms
    symptoms.forEach((symptom) => {
      if (symptom.name.toLowerCase().includes(query)) {
        results.push({
          id: symptom.id,
          title: symptom.name,
          description: `${symptom.category} symptom`,
          type: "symptom",
          href: "/symptom-checker",
        })
      }
    })

    // Search medical terms
    medicalTerms.forEach((term) => {
      if (
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.simpleExplanation.toLowerCase().includes(query)
      ) {
        results.push({
          id: term.term,
          title: term.term,
          description: term.simpleExplanation,
          type: "term",
          href: "/glossary",
        })
      }
    })

    return results.slice(0, 10) // Limit to 10 results
  }, [searchTerm])

  const handleResultClick = () => {
    setOpen(false)
    setSearchTerm("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <div className="relative flex-1 cursor-pointer">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder={placeholder} className="pl-10 cursor-pointer" readOnly />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Search MediGuide</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search diseases, symptoms, or medical terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              autoFocus
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Card key={`${result.type}-${result.id}`} className="hover:shadow-md transition-shadow cursor-pointer">
                  <Link href={result.href} onClick={handleResultClick}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base">{result.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {result.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm line-clamp-2">{result.description}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              ))
            ) : searchTerm ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No results found for "{searchTerm}"</p>
                <p className="text-sm mt-2">Try searching for symptoms, diseases, or medical terms</p>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>Start typing to search our medical database</p>
                <p className="text-sm mt-2">Search diseases, symptoms, or medical terms</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
