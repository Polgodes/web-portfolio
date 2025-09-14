"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Let&apos;s talk</h3>
        <p className="text-muted-foreground mb-6">
          Whether you have a project in mind or just want to chat about technology, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-primary" />
          <span>paulgodes11@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-primary" />
          <span>+639623876732 / +639777863226</span>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Pasig City, Philippines</span>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Response Time</h4>
        <p className="text-muted-foreground">I typically respond to emails within 24 hours during business days.</p>
      </div>
    </div>
  )
}
