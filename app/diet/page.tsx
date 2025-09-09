"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, Heart, Phone, ChevronRight, Utensils, Apple, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dietData } from "@/lib/diet-data"

export default function DietPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Conditions", icon: Utensils },
    { id: "diabetes", name: "Diabetes", icon: Apple },
    { id: "heart", name: "Heart Health", icon: Heart },
    { id: "digestive", name: "Digestive", icon: Utensils },
    { id: "weight", name: "Weight Management", icon: Apple },
    { id: "kidney", name: "Kidney Health", icon: Utensils },
  ]

  const filteredDiets = useMemo(() => {
    return dietData.filter((diet) => {
      const matchesSearch =
        diet.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        diet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        diet.keyFoods.some((food) => food.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || diet.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      {/* Medical Disclaimer Banner */}
      <div className="bg-red-50 border-b border-destructive/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
          <p className="text-destructive">
            <strong>Medical Disclaimer:</strong> This dietary information is for educational purposes only. Always
            consult your healthcare provider or registered dietitian before making significant dietary changes,
            especially if you have medical conditions or take medications.
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8" />
              <span className="text-2xl font-bold">MediGuide</span>
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
              <Link href="/diet" className="hover:text-accent transition-colors font-semibold">
                Diet & Nutrition
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

            <Button variant="destructive" size="sm" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Emergency: 112 / 108
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Diet & Nutrition</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Diet & Nutrition Guide</h1>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Find evidence-based dietary recommendations for specific medical conditions. Learn what foods to include,
            avoid, and how nutrition can support your health management.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by condition, food, or dietary need..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDiets.map((diet) => (
            <Card key={diet.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{diet.condition}</CardTitle>
                    <CardDescription className="mt-2">{diet.description}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {diet.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Foods */}
                <div>
                  <h4 className="font-semibold text-sm text-green-700 mb-2">✓ Include These Foods:</h4>
                  <div className="flex flex-wrap gap-1">
                    {diet.keyFoods.slice(0, 4).map((food, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-green-50 text-green-700 border-green-200"
                      >
                        {food}
                      </Badge>
                    ))}
                    {diet.keyFoods.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{diet.keyFoods.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Foods to Avoid */}
                <div>
                  <h4 className="font-semibold text-sm text-red-700 mb-2">✗ Limit or Avoid:</h4>
                  <div className="flex flex-wrap gap-1">
                    {diet.avoidFoods.slice(0, 3).map((food, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                        {food}
                      </Badge>
                    ))}
                    {diet.avoidFoods.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{diet.avoidFoods.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Key Tip */}
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Key Tip:</strong> {diet.keyTip}
                  </p>
                </div>

                <Link href={`/diet/${diet.id}`}>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Full Diet Plan
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDiets.length === 0 && (
          <div className="text-center py-12">
            <Utensils className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No dietary plans found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Important Notice */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Dietary Considerations</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Individual nutritional needs vary based on age, gender, activity level, and health status</li>
                <li>• Some foods may interact with medications - always check with your pharmacist</li>
                <li>• Gradual dietary changes are often more sustainable than drastic modifications</li>
                <li>• Consider working with a registered dietitian for personalized meal planning</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
