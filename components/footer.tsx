import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

import { contactInfo } from "@/data/links";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: contactInfo.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: contactInfo.linkedin,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Salim Aissaoui</h3>
            <p className="text-sm text-muted-foreground">
              Computer Engineering Student passionate about building innovative software solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Salim Aissaoui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}