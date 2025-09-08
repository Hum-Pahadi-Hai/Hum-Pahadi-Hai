"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Heart, AlertTriangle, Brain, Bone, Eye, Blinds as Lungs } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { diseases } from "@/lib/diseases-data"

const categoryIcons = {
  infectious: <div className="w-4 h-4 bg-red-500 rounded-full" />,
  chronic: <Heart className="w-4 h-4 text-red-500" />,
  injuries: <AlertTriangle className="w-4 h-4 text-orange-500" />,
  mental: <Brain className="w-4 h-4 text-purple-500" />,
  musculoskeletal: <Bone className="w-4 h-4 text-blue-500" />,
  eye: <Eye className="w-4 h-4 text-green-500" />,
  respiratory: <Lungs className="w-4 h-4 text-cyan-500" />,
}

export default function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSeverity, setSelectedSeverity] = useState("all")

  const filteredDiseases = useMemo(() => {
    return diseases.filter((disease) => {
      const matchesSearch =
        disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        disease.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        disease.symptoms.some((symptom) => symptom.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || disease.category === selectedCategory
      const matchesSeverity = selectedSeverity === "all" || disease.severity === selectedSeverity

      return matchesSearch && matchesCategory && matchesSeverity
    })
  }, [searchTerm, selectedCategory, selectedSeverity])

  const categories = [...new Set(diseases.map((d) => d.category))]
  const severityLevels = [...new Set(diseases.map((d) => d.severity))]

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
            <Link href="/diseases" className="text-accent font-medium">
              Diseases
            </Link>
            <Link href="/prevention" className="hover:text-accent transition-colors">
              Prevention
            </Link>
            <Link href="/glossary" className="hover:text-accent transition-colors">
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
            ⚠️ Medical Disclaimer: This information is for educational purposes only. Always consult a healthcare
            provider for diagnosis and treatment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Disease Database</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive information about diseases, conditions, and medical disorders
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search diseases, symptoms, or conditions..."
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

            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                {severityLevels.map((severity) => (
                  <SelectItem key={severity} value={severity}>
                    {severity.charAt(0).toUpperCase() + severity.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>
              Showing {filteredDiseases.length} of {diseases.length} conditions
            </span>
          </div>
        </div>

        {/* Disease Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((disease) => (
            <Card key={disease.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {categoryIcons[disease.category as keyof typeof categoryIcons]}
                    <CardTitle className="text-lg">{disease.name}</CardTitle>
                  </div>
                  <Badge
                    variant={
                      disease.severity === "critical"
                        ? "destructive"
                        : disease.severity === "serious"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {disease.severity}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">{disease.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Common Symptoms:</h4>
                    <div className="flex flex-wrap gap-1">
                      {disease.symptoms.slice(0, 3).map((symptom, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                      {disease.symptoms.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{disease.symptoms.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/diseases/${disease.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No diseases found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedSeverity("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
