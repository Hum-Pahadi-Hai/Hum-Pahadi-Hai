import { notFound } from "next/navigation"
import Link from "next/link"
import { Heart, Phone, ChevronRight, Clock, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dietData } from "@/lib/diet-data"

interface DietDetailPageProps {
  params: {
    id: string
  }
}

export default function DietDetailPage({ params }: DietDetailPageProps) {
  const diet = dietData.find((d) => d.id === params.id)

  if (!diet) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Medical Disclaimer Banner */}
      <div className="bg-red-50 border-b border-destructive/30 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
          <p className="text-destructive">
            <strong>Medical Disclaimer:</strong> This dietary information is for educational purposes only. Always
            consult your healthcare provider before making dietary changes.
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
              Emergency: 911
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/diet" className="hover:text-foreground">
            Diet & Nutrition
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{diet.condition}</span>
        </nav>

        {/* Diet Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{diet.condition} Diet Plan</h1>
              <p className="text-lg text-foreground">{diet.description}</p>
            </div>
            <Badge variant="secondary" className="ml-4">
              {diet.category}
            </Badge>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Foods to Include */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Foods to Include
                </CardTitle>
                <CardDescription>
                  These foods are beneficial for managing {diet.condition.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {diet.keyFoods.map((food, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-green-800">{food}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Foods to Avoid */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  Foods to Limit or Avoid
                </CardTitle>
                <CardDescription>These foods may worsen symptoms or interfere with treatment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {diet.avoidFoods.map((food, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                      <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <span className="text-sm text-red-800">{food}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Meal Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Sample Daily Meal Plan</CardTitle>
                <CardDescription>
                  A balanced day of eating for {diet.condition.toLowerCase()} management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {diet.sampleMeals.map((meal, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">{meal.meal}</h4>
                    <p className="text-sm text-foreground mt-1">{meal.foods}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Tip */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💡 Key Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">{diet.keyTip}</p>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Results may take 2-4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Consult a dietitian for personalization</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/diseases">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Learn about {diet.condition}
                  </Button>
                </Link>
                <Link href="/prevention">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Prevention Tips
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Contact a Nutritionist
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
