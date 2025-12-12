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
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Invest in Dubai</h2>
            <p className="text-xl text-muted-foreground">
              The world's most attractive real estate market for investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-2xl font-bold text-foreground text-center">Off-Plan vs Ready Properties</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left text-foreground font-semibold">Feature</th>
                    <th className="p-4 text-left text-foreground font-semibold">Off-Plan</th>
                    <th className="p-4 text-left text-foreground font-semibold">Ready Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 text-muted-foreground">Initial Investment</td>
                    <td className="p-4 text-foreground">Lower (10-20% down)</td>
                    <td className="p-4 text-foreground">Higher (full payment)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-muted-foreground">Payment Plan</td>
                    <td className="p-4 text-foreground">Flexible installments</td>
                    <td className="p-4 text-foreground">Immediate full payment</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-muted-foreground">Move-In</td>
                    <td className="p-4 text-foreground">2-3 years</td>
                    <td className="p-4 text-foreground">Immediate</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-muted-foreground">ROI Potential</td>
                    <td className="p-4 text-foreground">Higher appreciation</td>
                    <td className="p-4 text-foreground">Immediate rental income</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-muted-foreground">Best For</td>
                    <td className="p-4 text-foreground">Long-term investors</td>
                    <td className="p-4 text-foreground">Immediate occupancy</td>
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
