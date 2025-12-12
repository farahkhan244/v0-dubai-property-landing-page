import { Home, Building, Waves, TrendingUp } from "lucide-react"

const properties = [
  {
    icon: Home,
    title: "Ready Apartments",
    description: "Move-in ready properties across Dubai's prime locations",
  },
  {
    icon: Building,
    title: "Villas & Townhouses",
    description: "Spacious family homes in gated communities",
  },
  {
    icon: Waves,
    title: "Waterfront Units",
    description: "Exclusive properties with stunning water views",
  },
  {
    icon: TrendingUp,
    title: "Rental Investments",
    description: "High-yield properties for rental income",
  },
]

export default function SecondaryProperties() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready & Secondary Market</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore immediate investment opportunities in Dubai's secondary market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => {
            const Icon = property.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center space-y-4 hover:shadow-lg hover:shadow-primary/10 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{property.title}</h3>
                <p className="text-muted-foreground text-sm">{property.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
