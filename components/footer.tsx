import { Phone, Mail, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">Farheen Khan</h3>
            <p className="text-gold-gradient font-medium">Property Advisor</p>
            <p className="text-muted-foreground">Stage Properties – Dubai, UAE</p>
            <p className="text-sm text-muted-foreground leading-snug">
              Specializing in off-plan properties and investment opportunities across Dubai's most sought-after
              locations.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="tel:+971528272886" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+971 52 827 2886</span>
              </a>
              <a
                href="mailto:farahkhan244@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>farahkhan244@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-white hover:border-primary transition-all"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-white hover:border-primary transition-all"
              >
                <svg
                  className="w-5 h-5 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-white hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-background" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p className="mb-3">© {new Date().getFullYear()} Farheen Khan | Stage Properties. All rights reserved.</p>
          <p className="text-xs max-w-3xl mx-auto">
            Disclaimer: All project information is provided by developers and is subject to change. Property images are
            for illustrative purposes. Please verify all details before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
