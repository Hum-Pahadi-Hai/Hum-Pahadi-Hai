"use client"

import { useState, useMemo } from "react"
import { Search, Heart, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { medicalTerms } from "@/lib/glossary-data"

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredTerms = useMemo(() => {
    return medicalTerms.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.simpleExplanation.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || term.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const categories = [...new Set(medicalTerms.map((t) => t.category))]

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: typeof medicalTerms } = {}
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase()
      if (!groups[firstLetter]) {
        groups[firstLetter] = []
      }
      groups[firstLetter].push(term)
    })

    // Sort each group
    Object.keys(groups).forEach((letter) => {
      groups[letter].sort((a, b) => a.term.localeCompare(b.term))
    })

    return groups
  }, [filteredTerms])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">MediGuide</h1>
              <p className="text-xs opacity-90">by Hemu</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/symptom-checker" className="hover:text-accent transition-colors">
              Symptom Checker
            </Link>
            <Link href="/diseases" className="hover:text-accent transition-colors">
              Diseases
            </Link>
            <Link href="/prevention" className="hover:text-accent transition-colors">
              Prevention
            </Link>
            <Link href="/glossary" className="text-accent font-medium">
              Glossary
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Medical Disclaimer */}
      <div className="bg-destructive/10 border-b border-destructive/20 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-destructive font-medium">
            ⚠️ Medical Disclaimer: These definitions are for educational purposes only. Always consult healthcare
            professionals for medical advice.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Medical Glossary</h1>
          <p className="text-xl text-muted-foreground">
            Medical terms explained in simple, easy-to-understand language
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search medical terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>
              Showing {filteredTerms.length} of {medicalTerms.length} terms
            </span>
          </div>
        </div>

        {/* Alphabet Navigation */}
        <div className="mb-6 flex flex-wrap gap-2">
          {Object.keys(groupedTerms)
            .sort()
            .map((letter) => (
              <Button
                key={letter}
                variant="outline"
                size="sm"
                onClick={() => {
                  const element = document.getElementById(`letter-${letter}`)
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {letter}
              </Button>
            ))}
        </div>

        {/* Terms by Letter */}
        <div className="space-y-8">
          {Object.keys(groupedTerms)
            .sort()
            .map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">{letter}</h2>
                <div className="grid gap-4">
                  {groupedTerms[letter].map((term, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{term.term}</CardTitle>
                          <Badge variant="outline">{term.category}</Badge>
                        </div>
                        {term.pronunciation && (
                          <CardDescription className="italic">Pronunciation: {term.pronunciation}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-sm mb-1">Medical Definition:</h4>
                            <p className="text-muted-foreground">{term.definition}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-sm mb-1">Simple Explanation:</h4>
                            <p className="text-foreground">{term.simpleExplanation}</p>
                          </div>

                          {term.example && (
                            <div>
                              <h4 className="font-medium text-sm mb-1">Example:</h4>
                              <p className="text-muted-foreground italic">{term.example}</p>
                            </div>
                          )}

                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div>
                              <h4 className="font-medium text-sm mb-1">Related Terms:</h4>
                              <div className="flex flex-wrap gap-1">
                                {term.relatedTerms.map((related, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {related}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No terms found matching your search.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
