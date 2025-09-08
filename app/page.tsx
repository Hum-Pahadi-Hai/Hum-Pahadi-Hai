import { Search, Heart, Shield, BookOpen, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GlobalSearch } from "@/components/global-search"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">MediGuide</h1>
              <p className="text-xs opacity-90">by Hemu</p>
            </div>
          </div>

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
            <Link href="/glossary" className="hover:text-accent transition-colors">
              Glossary
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>

      {/* Medical Disclaimer Banner */}
      <div className="bg-destructive/10 border-b border-destructive/20 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-destructive font-medium">
            ⚠️ Medical Disclaimer: This website is for informational purposes only. Always consult a healthcare provider
            for professional medical advice.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Medical Information Platform
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Access comprehensive information about diseases, symptoms, treatments, and prevention strategies. Get
            reliable medical guidance at your fingertips.
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <GlobalSearch />
              <GlobalSearch
                trigger={
                  <Button size="lg" className="h-12 px-6">
                    Search
                  </Button>
                }
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/symptom-checker">
                <Shield className="mr-2 h-5 w-5" />
                Symptom Checker
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent" asChild>
              <Link href="/diseases">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Diseases
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Comprehensive Medical Resources</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Symptom Checker</CardTitle>
                <CardDescription>
                  Enter your symptoms and get possible conditions with detailed information
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Disease Database</CardTitle>
                <CardDescription>
                  Comprehensive information on diseases, causes, symptoms, and treatments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prevention Guide</CardTitle>
                <CardDescription>Learn how to prevent diseases and maintain optimal health</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>First Aid Tips</CardTitle>
                <CardDescription>Emergency first aid procedures and when to seek immediate help</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Medical Glossary</CardTitle>
                <CardDescription>Medical terms explained in simple, easy-to-understand language</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Reviewed</CardTitle>
                <CardDescription>All content reviewed by medical professionals for accuracy</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Browse by Category</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
              <Link href="/diseases?category=infectious">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                Infectious Diseases
              </Link>
            </Button>

            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
              <Link href="/diseases?category=chronic">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                Chronic Conditions
              </Link>
            </Button>

            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
              <Link href="/diseases?category=injuries">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                Injuries & Trauma
              </Link>
            </Button>

            <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" asChild>
              <Link href="/diseases?category=mental">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                </div>
                Mental Health
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 px-4 bg-destructive/5 border-t border-destructive/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Phone className="h-6 w-6 text-destructive" />
            <h3 className="text-xl font-bold text-destructive">Medical Emergency?</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            If you're experiencing a medical emergency, don't use this website. Call emergency services immediately.
          </p>
          <Button variant="destructive" size="lg">
            Emergency: Call 911
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6" />
            <div>
              <h4 className="font-bold">MediGuide by Hemu</h4>
              <p className="text-sm opacity-90">Trusted Medical Information</p>
            </div>
          </div>
          <p className="text-sm opacity-75 max-w-2xl mx-auto">
            MediGuide provides educational medical information and should not replace professional medical advice,
            diagnosis, or treatment. Always consult with qualified healthcare providers.
          </p>
        </div>
      </footer>
    </div>
  )
}
