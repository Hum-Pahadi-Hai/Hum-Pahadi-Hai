import { notFound } from "next/navigation"
import { Heart, ArrowLeft, AlertTriangle, Stethoscope, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { diseases } from "@/lib/diseases-data"

interface DiseasePageProps {
  params: {
    id: string
  }
}

export default function DiseasePage({ params }: DiseasePageProps) {
  const disease = diseases.find((d) => d.id === params.id)

  if (!disease) {
    notFound()
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
            ⚠️ This information is for educational purposes only. Consult a healthcare provider for proper diagnosis and
            treatment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-6 bg-transparent">
          <Link href="/diseases">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Diseases
          </Link>
        </Button>

        {/* Disease Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-foreground">{disease.name}</h1>
            <Badge
              variant={
                disease.severity === "critical"
                  ? "destructive"
                  : disease.severity === "serious"
                    ? "secondary"
                    : "outline"
              }
              className="text-sm"
            >
              {disease.severity.toUpperCase()}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{disease.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{disease.overview}</p>
              </CardContent>
            </Card>

            {/* Causes */}
            <Card>
              <CardHeader>
                <CardTitle>Common Causes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {disease.causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{cause}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Symptoms */}
            <Card>
              <CardHeader>
                <CardTitle>Signs and Symptoms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-2">
                  {disease.symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                      <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0" />
                      <span className="text-sm">{symptom}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Diagnosis */}
            <Card>
              <CardHeader>
                <CardTitle>Diagnosis Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {disease.diagnosis.map((method, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Treatment */}
            <Card>
              <CardHeader>
                <CardTitle>Treatment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {disease.treatment.map((treatment, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prevention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {disease.prevention.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* When to Seek Help */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Seek Immediate Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {disease.seekHelp.map((warning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-destructive">{warning}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <Button variant="destructive" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: Call 112 / 108
                </Button>
              </CardContent>
            </Card>

            {/* Related Conditions */}
            {disease.relatedConditions && disease.relatedConditions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {disease.relatedConditions.map((condition, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start bg-transparent"
                        asChild
                      >
                        <Link href={`/diseases/${condition.toLowerCase().replace(/\s+/g, "-")}`}>{condition}</Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
