"use client"

import { FooterBrand } from "@/components/footer/footer-brand"
import { FooterNavigation } from "@/components/footer/footer-navigation"
import { FooterSocial } from "@/components/footer/footer-social"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <FooterBrand />
          <FooterNavigation />
          <FooterSocial />
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Paul Adrian L. Godes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
