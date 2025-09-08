"use client"

import type React from "react"

import { useState } from "react"
import { Heart, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
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
            <Link href="/glossary" className="hover:text-accent transition-colors">
              Glossary
            </Link>
            <Link href="/contact" className="text-accent font-medium">
              Contact
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>

      {/* Medical Disclaimer */}
      <div className="bg-destructive/10 border-b border-destructive/20 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-destructive font-medium">
            ⚠️ For medical emergencies, call 911 immediately. This contact form is not for urgent medical questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about MediGuide? We're here to help. Reach out to us for support, feedback, or general
            inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@mediguide.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
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
                <CardTitle className="text-destructive">Emergency Notice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're experiencing a medical emergency, do not use this contact form. Call emergency services
                  immediately.
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
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24-48 hours.</CardDescription>
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
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="content">Content Question</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
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
                        <strong>Please note:</strong> This form is for general inquiries only. Do not include personal
                        health information or seek medical advice through this form. For medical questions, please
                        consult with a healthcare professional.
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
                  No, MediGuide is for educational purposes only. Always consult with qualified healthcare professionals
                  for medical advice, diagnosis, and treatment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How accurate is the information on MediGuide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our content is reviewed by medical professionals and based on current medical literature. However,
                  medical knowledge evolves, so always verify with your healthcare provider.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I suggest new content or corrections?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We welcome feedback and suggestions. Use the contact form above with "Content Question" as the
                  subject to share your input.
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
