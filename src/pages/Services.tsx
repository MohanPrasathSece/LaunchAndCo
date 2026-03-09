import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Target,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react";

const Services: React.FC = () => {
  const businessUnits = [
    {
      id: "strategy",
      icon: Target,
      title: "Revenue Architecture",
      subtitle: "Strategy & Leadership",
      description: "Strategic foundations that set the stage for scalable growth. We design the blueprint for your revenue engine.",
      services: [
        {
          name: "GTM Consulting",
          description: "Market fit analysis & KPI design. We validate your approach and define success metrics."
        },
        {
          name: "Fractional Leadership",
          description: "Interim VP of Sales / CMO. Senior leadership without the full-time commitment."
        },
        {
          name: "Corporate Training",
          description: "Sales methodologies & leadership coaching. Transform your team into A-players."
        }
      ],
      imagePosition: "left"
    },
    {
      id: "execution",
      icon: TrendingUp,
      title: "Sales & Growth Teams",
      subtitle: "Revenue Execution (The Human Capital)",
      description: "The engine room. We deploy fractional sales teams and revenue experts who execute and deliver results.",
      services: [
        {
          name: "Fractional Sales Teams",
          description: "SDRs & Closers deployed to your CRM. We become your revenue engine immediately."
        },
        {
          name: "Account Management",
          description: "Customer Success & Retention flows. Maximize LTV and reduce churn."
        },
        {
          name: "Outbound Operations",
          description: "Cold Email/LinkedIn campaigns. We fill your pipeline with qualified leads."
        }
      ],
      imagePosition: "right"
    },
    {
      id: "tech",
      icon: Users,
      title: "Digital Infrastructure",
      subtitle: "Development & AI (The New Infrastructure Arm)",
      tagline: "Code that Converts.",
      description: "The technology backbone that supports your entire revenue operation. We build what drives growth.",
      services: [
        {
          name: "Conversion-First Web Dev",
          description: "High-speed landing pages & corporate sites built for SEO and sales."
        },
        {
          name: "SaaS & App Development",
          description: "MVP builds (Web & Mobile) to get you to market fast."
        },
        {
          name: "AI Agent Development",
          description: "Custom AI bots for 24/7 Lead Qualification and L1 Customer Support."
        }
      ],
      imagePosition: "left"
    }
  ];


  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10 min-h-[50vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The 3 Business Units
          </h1>
          <p className="text-xl text-muted-foreground">
            Strategy. Execution. Technology. The complete revenue stack under one roof.
          </p>
        </div>
      </section>

      {businessUnits.map((unit, index) => (
        <section
          key={index}
          id={unit.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-black/5' : 'bg-black/10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <unit.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {unit.title}
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                {unit.subtitle}
              </p>
              {unit.tagline && (
                <p className="text-lg text-accent font-semibold mb-6">
                  {unit.tagline}
                </p>
              )}
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {unit.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {unit.services.map((service, serviceIndex) => (
                <GlassCard key={serviceIndex} className="text-center h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Revenue Stack?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our three business units can accelerate your growth.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact" className="flex items-center">
              Book a Strategy Call
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Services;
