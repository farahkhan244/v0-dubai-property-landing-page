import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can foreigners buy off-plan properties in Dubai?",
    answer:
      "Yes! Foreigners can purchase freehold properties in designated areas across Dubai. The process is straightforward, and you can own property with full ownership rights, including the ability to resell or lease.",
  },
  {
    question: "What are the typical payment plans for off-plan properties?",
    answer:
      "Off-plan properties in Dubai typically offer flexible payment plans. Common structures include 60/40 (60% during construction, 40% on handover), 70/30, or 80/20 plans. Some developers also offer post-handover payment plans extending 1-5 years after completion.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "Investment amounts vary by project and location. Entry-level apartments start from around AED 500,000, while luxury properties can go into millions. With flexible payment plans, initial deposits can be as low as 10-20% of the property value.",
  },
  {
    question: "What documents do I need to buy property in Dubai?",
    answer:
      "You'll need a valid passport, visa copy (if resident), Emirates ID (if applicable), and proof of funds. For overseas buyers, additional documents may include proof of address and bank statements. I'll guide you through the complete checklist.",
  },
  {
    question: "How long does the buying process take?",
    answer:
      "For off-plan properties, the reservation can be done within days. Complete documentation and payment processing typically takes 1-2 weeks. Ready properties can be purchased faster, often within a week if all documents are prepared.",
  },
  {
    question: "Are there any fees or additional charges?",
    answer:
      "Yes, typical fees include Dubai Land Department (DLD) registration fee (4% of property value, split between buyer and seller for resale), agency commission (usually 2%), and administrative fees. For off-plan properties, developers may charge a booking fee (typically AED 5,000-10,000).",
  },
]

export default function FAQSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about investing in Dubai property
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline text-sm py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-snug pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
