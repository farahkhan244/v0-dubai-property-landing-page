const developers = [
  "Emaar",
  "Damac",
  "Meraas",
  "Dubai Properties",
  "Nakheel",
  "Sobha Realty",
  "Azizi Developments",
  "Select Group",
]

export default function DevelopersStrip() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">Trusted Developer Partners</h3>
          <p className="text-muted-foreground">Working with Dubai's most reputable developers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-card border border-border rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <p className="text-sm font-medium text-muted-foreground text-center">{developer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
