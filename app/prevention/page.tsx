"use client"

import { Heart, Shield, Activity, Apple, Moon, Droplets, Users, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { preventionData } from "@/lib/prevention-data"

export default function PreventionPage() {
  const categoryIcons = {
    lifestyle: <Activity className="h-5 w-5" />,
    nutrition: <Apple className="h-5 w-5" />,
    exercise: <Heart className="h-5 w-5" />,
    mental: <Users className="h-5 w-5" />,
    hygiene: <Droplets className="h-5 w-5" />,
    sleep: <Moon className="h-5 w-5" />,
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
            <Link href="/symptom-checker" className="hover:text-accent transition-colors">
              Symptom Checker
            </Link>
            <Link href="/diseases" className="hover:text-accent transition-colors">
              Diseases
            </Link>
            <Link href="/prevention" className="text-accent font-medium">
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
            ⚠️ Prevention tips are for general health guidance. Consult healthcare providers / doctors for personalized medical advice.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Health Prevention Guide</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive strategies to prevent diseases and maintain optimal health through lifestyle choices,
            nutrition, exercise, and preventive care.
          </p>
        </div>

        {/* Key Prevention Principles */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Core Prevention Principles
            </CardTitle>
            <CardDescription>The foundation of good health starts with these essential practices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Stay Active</h3>
                <p className="text-sm text-muted-foreground">Regular physical activity</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Apple className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Eat Well</h3>
                <p className="text-sm text-muted-foreground">Balanced nutrition</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Moon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Sleep Quality</h3>
                <p className="text-sm text-muted-foreground">Adequate rest</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Preventive Care</h3>
                <p className="text-sm text-muted-foreground">Regular checkups</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention Categories */}
        <Tabs defaultValue="lifestyle" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="exercise">Exercise</TabsTrigger>
            <TabsTrigger value="mental">Mental Health</TabsTrigger>
            <TabsTrigger value="hygiene">Hygiene</TabsTrigger>
            <TabsTrigger value="sleep">Sleep</TabsTrigger>
          </TabsList>

          {Object.entries(preventionData).map(([category, data]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                    {data.title}
                  </CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {data.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <div>
                                <h4 className="font-medium text-sm">{tip.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                                {tip.frequency && (
                                  <Badge variant="outline" className="mt-2 text-xs">
                                    {tip.frequency}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Disease-Specific Prevention */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Disease-Specific Prevention</CardTitle>
            <CardDescription>Targeted prevention strategies for common health conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Heart Disease</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Maintain healthy cholesterol levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Control blood pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Don't smoke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Exercise regularly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Type 2 Diabetes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Maintain healthy weight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Eat balanced diet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Stay physically active</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Regular health screenings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Cancer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Avoid tobacco products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Limit alcohol consumption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Protect from sun exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Get recommended screenings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Prevention */}
        <Card className="mt-8 border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Emergency Prevention
            </CardTitle>
            <CardDescription>Know the warning signs and when to seek immediate medical attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Heart Attack Warning Signs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Chest pain or discomfort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Shortness of breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Pain in arms, back, neck, jaw</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Stroke Warning Signs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Sudden numbness or weakness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Sudden confusion or trouble speaking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Sudden severe headache</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
