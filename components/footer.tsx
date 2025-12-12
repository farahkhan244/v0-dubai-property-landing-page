import { Phone, Mail, Linkedin, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Farheen Khan</h3>
            <p className="text-gold-gradient font-medium">Property Advisor</p>
            <p className="text-muted-foreground">Stage Properties – Dubai, UAE</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Specializing in off-plan properties and investment opportunities across Dubai's most sought-after
              locations.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <a href="tel:+971528272886" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+971 52 827 2886</span>
              </a>
              <a
                href="mailto:farahkhan244@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>farahkhan244@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://wa.me/971528272886"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-4">© {new Date().getFullYear()} Farheen Khan | Stage Properties. All rights reserved.</p>
          <p className="text-xs max-w-3xl mx-auto">
            Disclaimer: All project information is provided by developers and is subject to change. Property images are
            for illustrative purposes. Please verify all details before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
