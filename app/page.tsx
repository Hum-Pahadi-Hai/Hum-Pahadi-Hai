import { Search, Heart, Shield, BookOpen, Activity, Clock, TrendingUp, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { GlobalSearch } from "@/components/global-search"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="pt-6 pb-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Good Morning!</h2>
              <p className="text-muted-foreground">How can we help you today?</p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="mb-6">
            <GlobalSearch />
          </div>
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-4">
                <Link href="/symptom-checker" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Check Symptoms</p>
                    <p className="text-xs text-blue-700">Find possible conditions</p>
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-4">
                <Link href="/diet" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Diet Guide</p>
                    <p className="text-xs text-green-700">Healthy eating tips</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Health Overview</h3>
          <div className="grid grid-cols-3 gap-3">
            <Card className="text-center">
              <CardContent className="p-4">
                <Activity className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">150+</p>
                <p className="text-xs text-muted-foreground">Conditions</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4">
                <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Articles</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4">
                <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Browse Categories</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-16 justify-start gap-3 bg-background" asChild>
              <Link href="/diseases?category=infectious">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <div className="text-left">
                  <p className="font-medium">Infectious</p>
                  <p className="text-xs text-muted-foreground">Viral & Bacterial</p>
                </div>
              </Link>
            </Button>

            <Button variant="outline" className="h-16 justify-start gap-3 bg-background" asChild>
              <Link href="/diseases?category=chronic">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-orange-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Chronic</p>
                  <p className="text-xs text-muted-foreground">Long-term conditions</p>
                </div>
              </Link>
            </Button>

            <Button variant="outline" className="h-16 justify-start gap-3 bg-background" asChild>
              <Link href="/diseases?category=injuries">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Injuries</p>
                  <p className="text-xs text-muted-foreground">Trauma & wounds</p>
                </div>
              </Link>
            </Button>

            <Button variant="outline" className="h-16 justify-start gap-3 bg-background" asChild>
              <Link href="/diseases?category=mental">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                </div>
                <div className="text-left">
                  <p className="font-medium">Mental Health</p>
                  <p className="text-xs text-muted-foreground">Psychological care</p>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Updates</h3>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">New diet plans added</p>
                    <p className="text-xs text-muted-foreground">Indian middle-class friendly recipes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Thyroid conditions updated</p>
                    <p className="text-xs text-muted-foreground">Goitre, hyperthyroidism info added</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 mb-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <div className="flex-1">
                  <p className="font-medium text-red-900">Medical Emergency?</p>
                  <p className="text-sm text-red-700">Call 112 / 108 immediately</p>
                </div>
                <Button variant="destructive" size="sm" asChild>
                  <a href="tel:112">Call Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-3">
              <p className="text-xs text-center text-amber-800">
                ⚠️ For informational purposes only. Always consult healthcare providers for medical advice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
