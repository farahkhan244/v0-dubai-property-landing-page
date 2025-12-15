import { TrendingUp, PiggyBank, Shield, Building2 } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "High Rental Yields",
    description: "6-8% average returns in prime locations",
  },
  {
    icon: PiggyBank,
    title: "Tax-Free Ownership",
    description: "No property tax, capital gains, or income tax",
  },
  {
    icon: Shield,
    title: "Strong Capital Appreciation",
    description: "Consistent property value growth year over year",
  },
  {
    icon: Building2,
    title: "World-Class Infrastructure",
    description: "Unmatched connectivity and lifestyle amenities",
  },
]

export default function WhyInvestDubai() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Why Invest in Dubai</h2>
            <p className="text-lg text-muted-foreground">
              The world's most attractive real estate market for investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 space-y-3 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-snug">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 border-b border-border">
              <h3 className="text-2xl font-bold text-center leading-tight">
                <span className="text-gold-gradient">Off-Plan vs Ready Properties</span>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 text-left text-foreground font-semibold text-sm">Feature</th>
                    <th className="p-3 text-center text-foreground font-semibold text-sm">Off-Plan</th>
                    <th className="p-3 text-right text-foreground font-semibold text-sm">Ready Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 text-muted-foreground text-sm">Initial Investment</td>
                    <td className="p-3 text-foreground text-sm text-center">Lower (10-20% down)</td>
                    <td className="p-3 text-foreground text-sm text-right">Higher (full payment)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-muted-foreground text-sm">Payment Plan</td>
                    <td className="p-3 text-foreground text-sm text-center">Flexible installments</td>
                    <td className="p-3 text-foreground text-sm text-right">Immediate full payment</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-muted-foreground text-sm">Move-In</td>
                    <td className="p-3 text-foreground text-sm text-center">2-3 years</td>
                    <td className="p-3 text-foreground text-sm text-right">Immediate</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 text-muted-foreground text-sm">ROI Potential</td>
                    <td className="p-3 text-foreground text-sm text-center">Higher appreciation</td>
                    <td className="p-3 text-foreground text-sm text-right">Immediate rental income</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground text-sm">Best For</td>
                    <td className="p-3 text-foreground text-sm text-center">Long-term investors</td>
                    <td className="p-3 text-foreground text-sm text-right">Immediate occupancy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
