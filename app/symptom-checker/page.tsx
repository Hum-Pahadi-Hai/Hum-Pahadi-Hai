"use client"

import { useState, useMemo } from "react"
import { Search, Heart, AlertTriangle, CheckCircle, XCircle, ArrowRight, Stethoscope, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { symptoms, getConditionsBySymptoms } from "@/lib/symptom-data"

export default function SymptomCheckerPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)

  const filteredSymptoms = useMemo(() => {
    return symptoms.filter(
      (symptom) =>
        symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        symptom.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  const possibleConditions = useMemo(() => {
    if (selectedSymptoms.length === 0) return []
    return getConditionsBySymptoms(selectedSymptoms)
  }, [selectedSymptoms])

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId) ? prev.filter((id) => id !== symptomId) : [...prev, symptomId],
    )
  }

  const handleAnalyze = () => {
    if (selectedSymptoms.length > 0) {
      setShowResults(true)
    }
  }

  const resetChecker = () => {
    setSelectedSymptoms([])
    setShowResults(false)
    setSearchTerm("")
  }

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
            <Link href="/symptom-checker" className="text-accent font-medium">
              Symptom Checker
            </Link>
            <Link href="/diseases" className="hover:text-accent transition-colors">
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
      <div className="bg-destructive/10 border-b border-destructive/20 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <p className="text-sm text-center text-destructive font-medium">
              Important: This tool is for informational purposes only and cannot replace professional medical diagnosis.
              Always consult a healthcare provider.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!showResults ? (
          <>
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">Symptom Checker</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Select your symptoms below to get information about possible conditions. Remember, this is not a
                substitute for professional medical advice.
              </p>
            </div>

            {/* Selected Symptoms Summary */}
            {selectedSymptoms.length > 0 && (
              <Card className="mb-6 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Selected Symptoms ({selectedSymptoms.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedSymptoms.map((symptomId) => {
                      const symptom = symptoms.find((s) => s.id === symptomId)
                      return symptom ? (
                        <Badge key={symptomId} variant="secondary" className="flex items-center gap-1">
                          {symptom.name}
                          <XCircle
                            className="h-3 w-3 cursor-pointer hover:text-destructive"
                            onClick={() => handleSymptomToggle(symptomId)}
                          />
                        </Badge>
                      ) : null
                    })}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleAnalyze} className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4" />
                      Analyze Symptoms
                    </Button>
                    <Button variant="outline" onClick={resetChecker}>
                      Clear All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Symptom Search */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Search and Select Symptoms</CardTitle>
                <CardDescription>Type to search for symptoms or browse the categories below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search symptoms (e.g., headache, fever, cough)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Symptom Categories */}
            <div className="grid gap-6">
              {["general", "respiratory", "digestive", "neurological", "cardiovascular", "musculoskeletal"].map(
                (category) => {
                  const categorySymptoms = filteredSymptoms.filter((s) => s.category === category)
                  if (categorySymptoms.length === 0) return null

                  return (
                    <Card key={category}>
                      <CardHeader>
                        <CardTitle className="capitalize">{category} Symptoms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {categorySymptoms.map((symptom) => (
                            <div key={symptom.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={symptom.id}
                                checked={selectedSymptoms.includes(symptom.id)}
                                onCheckedChange={() => handleSymptomToggle(symptom.id)}
                              />
                              <label
                                htmlFor={symptom.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                              >
                                {symptom.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                },
              )}
            </div>
          </>
        ) : (
          <>
            {/* Results Page */}
            <div className="mb-6">
              <Button variant="outline" onClick={() => setShowResults(false)} className="mb-4">
                ← Back to Symptom Selection
              </Button>

              <h1 className="text-4xl font-bold text-foreground mb-4">Analysis Results</h1>
              <p className="text-muted-foreground">
                Based on your selected symptoms, here are possible conditions to consider:
              </p>
            </div>

            {/* Selected Symptoms Summary */}
            <Card className="mb-6 border-primary/20">
              <CardHeader>
                <CardTitle>Your Selected Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptomId) => {
                    const symptom = symptoms.find((s) => s.id === symptomId)
                    return symptom ? (
                      <Badge key={symptomId} variant="secondary">
                        {symptom.name}
                      </Badge>
                    ) : null
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Possible Conditions */}
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground">Possible Conditions</h2>

              {possibleConditions.length > 0 ? (
                <div className="grid gap-4">
                  {possibleConditions.map((condition, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{condition.name}</CardTitle>
                            <CardDescription className="mt-2">{condition.description}</CardDescription>
                          </div>
                          <Badge
                            variant={
                              condition.severity === "critical"
                                ? "destructive"
                                : condition.severity === "serious"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {condition.matchPercentage}% match
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Matching Symptoms:</h4>
                            <div className="flex flex-wrap gap-1">
                              {condition.matchingSymptoms.map((symptom, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {symptom}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Recommended Actions:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {condition.recommendations.map((rec, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {rec}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2">
                            <Button asChild size="sm">
                              <Link href={`/diseases/${condition.id}`}>
                                Learn More <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-muted-foreground">
                      No specific conditions match your selected symptoms. This doesn't mean nothing is wrong - please
                      consult a healthcare provider for proper evaluation.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Emergency Warning */}
            <Card className="border-destructive/20 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  When to Seek Immediate Medical Attention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Difficulty breathing or shortness of breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Chest pain or pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Severe allergic reaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Loss of consciousness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Severe bleeding</span>
                  </li>
                </ul>
                <Button variant="destructive" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: Call 911
                </Button>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Consult a Healthcare Provider</h4>
                      <p className="text-sm text-muted-foreground">
                        Schedule an appointment with your doctor or visit a clinic for proper diagnosis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Monitor Your Symptoms</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep track of any changes in your symptoms and their severity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Follow Medical Advice</h4>
                      <p className="text-sm text-muted-foreground">
                        Take any prescribed medications and follow your healthcare provider's recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
