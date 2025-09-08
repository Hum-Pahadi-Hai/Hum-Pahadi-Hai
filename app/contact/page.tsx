"use client"

import type React from "react"

import { useState } from "react"
import { Heart, Mail, Phone, MapPin, Clock, Send, CheckCircle, Stethoscope, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">MediGuide by Hemu</h1>
              <p className="text-xs opacity-90">Your Complete Medical Companion</p>
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
              Medical Database
            </Link>
            <Link href="/prevention" className="hover:text-accent transition-colors">
              Prevention & Diet
            </Link>
            <Link href="/glossary" className="hover:text-accent transition-colors">
              Medical Glossary
            </Link>
            <Link href="/contact" className="text-accent font-medium">
              Contact & Support
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>

      {/* Medical Disclaimer */}
      <div className="bg-destructive/10 border-b border-destructive/20 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-destructive font-medium">
            ⚠️ MEDICAL EMERGENCY? Call 911 immediately. MediGuide does not replace professional medical diagnosis or
            treatment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Your Medical Companion</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about medical conditions, symptoms, or need support with MediGuide? Our comprehensive medical
            knowledge base team is here to help with your health information needs.
          </p>
        </div>

        {/* Medical Companion Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Comprehensive Medical Database</h3>
              <p className="text-sm text-muted-foreground">
                Access information on diseases, conditions, symptoms, treatments, and prevention strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trusted Health Information</h3>
              <p className="text-sm text-muted-foreground">
                Medically reviewed content with proper disclaimers and guidance to consult healthcare professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community Support</h3>
              <p className="text-sm text-muted-foreground">
                Get help navigating our medical resources and finding the health information you need.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Medical Information Support
                </CardTitle>
                <CardDescription>
                  Need help with medical information, have feedback about our database, or questions about using
                  MediGuide? We're here to assist you.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Medical Information Support</p>
                    <p className="text-sm text-muted-foreground">support@mediguide.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Support Helpline</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-5PM EST (Non-emergency only)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Health Street
                      <br />
                      Medical District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Support Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Medical Emergency Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  MediGuide is for educational purposes only and does not provide medical diagnosis or treatment. If
                  you're experiencing a medical emergency, do not use this contact form or search our database. Call
                  emergency services immediately.
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: Call 911
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Get Medical Information Support</CardTitle>
                <CardDescription>
                  Have questions about medical conditions, need help using our database, or want to provide feedback?
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical-info">Medical Information Question</SelectItem>
                          <SelectItem value="database">Database Content Inquiry</SelectItem>
                          <SelectItem value="symptom-checker">Symptom Checker Support</SelectItem>
                          <SelectItem value="feedback">Platform Feedback</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Medical Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your question or feedback in detail..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Important:</strong> This form is for general inquiries about MediGuide's medical
                        information database only. Do not include personal health information, seek medical advice, or
                        report symptoms through this form. For medical questions, please consult with a qualified
                        healthcare professional. MediGuide does not replace professional medical diagnosis or treatment.
                      </p>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is MediGuide a replacement for medical advice?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely not. MediGuide is your educational medical companion for learning about health conditions,
                  symptoms, and treatments. Always consult with qualified healthcare professionals for medical advice,
                  diagnosis, and treatment decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How comprehensive is MediGuide's medical database?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our database covers major diseases, infections, injuries, disorders, and medical conditions from
                  common colds to rare disorders. Each entry includes causes, symptoms, treatments, prevention, and
                  dietary advice, all reviewed by medical professionals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I suggest new content or corrections?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We welcome feedback and suggestions. Use the contact form above with "Database Content Inquiry"
                  as the subject to share your input.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I report technical issues?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For technical problems, please use the contact form with "Technical Support" as the subject. Include
                  details about the issue and your device/browser information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
