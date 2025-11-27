import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Target,
  Eye,
  Zap,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Users,
  Award
} from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Execution First",
      description: "We measure success by revenue, not PowerPoint decks. Our engagements are accountable to real business outcomes—pipeline generated, deals closed, churn reduced."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "You see what we see. No hidden data, no black boxes. We provide full visibility into our activities, results, and learnings. Your success is our success."
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We move at the speed of a startup. No bureaucracy, no lengthy approval processes. We adapt quickly to market feedback and pivot when necessary."
    },
    {
      icon: BookOpen,
      title: "Knowledge Transfer",
      description: "We're not building dependency—we're building capability. Every engagement includes full documentation, training, and IP transfer so your team can operate independently."
    }
  ];

  const teamHighlights = [
    {
      icon: TrendingUp,
      title: "Sales Leadership",
      description: "50+ years combined experience leading sales teams at high-growth startups and Fortune 500 companies"
    },
    {
      icon: Users,
      title: "Industries",
      description: "SaaS, FinTech, HealthTech, MarTech, Enterprise Software, Professional Services"
    },
    {
      icon: Award,
      title: "Stage Expertise",
      description: "Pre-seed to Series C, bootstrapped to PE-backed"
    }
  ];

  const achievements = [
    { label: "Successful exits", value: "5" },
    { label: "IPOs", value: "3" },
    { label: "Acquisitions", value: "10+" },
    { label: "Revenue Generated", value: "$500M+" },
    { label: "Teams Built", value: "200+" }
  ];

  const backgrounds = [
    "Former VPs of Sales at venture-backed SaaS companies",
    "Ex-management consultants from top-tier firms (McKinsey, Bain, BCG)",
    "Startup founders with successful exits",
    "Enterprise sales leaders from Oracle, Salesforce, HubSpot",
    "Customer Success executives who built CS functions from scratch"
  ];

  const comparisonPoints = [
    {
      category: "Traditional Consulting Firms",
      points: [
        "Junior consultants doing the work",
        "Theoretical frameworks",
        "Expensive retainers with no accountability",
        "Leave you with a deck"
      ]
    },
    {
      category: "Executive Recruiters",
      points: [
        "6-12 month hiring process",
        "20-30% placement fee",
        "No guarantee of performance",
        "You're on your own after hire"
      ]
    },
    {
      category: "Launch & Close",
      points: [
        "Senior operators doing the work",
        "Proven playbooks from real experience",
        "Performance-based pricing",
        "We execute, prove the model, then transfer"
      ],
      highlight: true
    }
  ];

  const industries = [
    "B2B SaaS and Software",
    "FinTech and Financial Services",
    "HealthTech and Digital Health",
    "MarTech and AdTech",
    "Professional Services",
    "Enterprise Technology"
  ];

  const stages = [
    "Pre-seed to Series C startups",
    "Bootstrapped and profitable SMBs",
    "PE-backed companies in growth mode",
    "Corporate innovation teams launching new products"
  ];

  const recognition = [
    "Featured in: TechCrunch, Forbes, SaaStr, Sales Hacker",
    "Partners: HubSpot, Salesforce, Gong, Outreach",
    "Advisors to: Y Combinator companies, Techstars portfolio, 500 Startups",
    "Speaking engagements: SaaStr Annual, Sales Success Summit, RevOps Conference"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Banner Section - First */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Operators, Not Just Consultants.
          </h1>
          <p className="text-xl text-muted-foreground">
            We are revenue leaders who have built, scaled, and exited. We don't theorize—we execute.
          </p>
        </div>
      </section>

      {/* Founder Section - Second, smaller image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image in container */}
          <div className="inline-block rounded-2xl overflow-hidden">
            <img
              src="/images/Adrian Bio Pic.jpeg.jpg"
              alt="Founder Adrian"
              className="w-full h-auto max-w-sm lg:max-w-md rounded-2xl object-contain opacity-95"
            />
          </div>

          {/* Right: bio content */}
          <div className="space-y-6">
            <p className="text-sm text-accent uppercase tracking-[0.2em]">Founder</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
              Work directly with an operator, not a consultant.
            </h2>
            <p className="text-lg text-muted-foreground">
              Our founder has built and led revenue teams across SaaS, services, and marketplaces—owning everything from zero-to-one GTM to multi-million ARR scale-ups.
            </p>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>• 10+ years leading B2B revenue teams</li>
              <li>• 3x exits, including a venture-backed SaaS company</li>
              <li>• Built revenue engines from $0 to $10M+ ARR</li>
              <li>• Fractional VP of Sales for 6+ companies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
            Why We Built Launch & Close
          </h2>
          <GlassCard>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Launch & Close was founded by operators who experienced the same challenges our clients face: the gap between strategy and execution.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We've been the VP of Sales hired too early who couldn't deliver. We've been the founder struggling to build a predictable sales motion. We've been the investor watching portfolio companies waste time and capital on bad hires.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We built Launch & Close to solve a simple problem: startups and SMBs need senior revenue expertise, but they can't afford the risk, cost, or time of traditional hiring.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our model is different. We don't just advise—we execute. We don't just build plans—we deliver revenue. And we don't disappear after the engagement—we transfer everything we build to your team.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet the Operators
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team has collectively generated over $500M in B2B revenue, built sales teams from 0 to 50+, and led successful exits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamHighlights.map((highlight, index) => (
              <GlassCard key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {highlight.description}
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <GlassCard key={index} className="text-center" hover={false}>
                <div className="text-3xl font-bold text-primary mb-1">
                  {achievement.value}
                </div>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard>
            <h3 className="text-xl font-bold text-foreground mb-6">
              Operator Backgrounds
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {backgrounds.map((background, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">{background}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            How We're Different
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            A new approach to revenue operations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisonPoints.map((item, index) => (
              <GlassCard
                key={index}
                className={item.highlight ? 'border-2 border-primary' : ''}
              >
                <h3 className={`text-xl font-bold mb-6 text-center ${item.highlight ? 'text-primary' : 'text-foreground'
                  }`}>
                  {item.category}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      <span className="text-muted-foreground text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Who We Work With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <GlassCard>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Ideal Partners
              </h3>
              <p className="text-muted-foreground mb-4">
                We work best with ambitious founders, CEOs, and investors who:
              </p>
              <ul className="space-y-2">
                {[
                  "Value execution over theory",
                  "Are ready to move quickly",
                  "Want to build sustainable, scalable revenue engines",
                  "Understand that growth requires investment",
                  "Are open to challenging their assumptions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Industries We Serve
              </h3>
              <ul className="space-y-2">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-base">{industry}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Stage Focus
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {stages.map((stage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">{stage}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Trusted by the Ecosystem
          </h2>
          <GlassCard>
            <ul className="space-y-3">
              {recognition.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your revenue challenges and explore how we can help.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-background hover:bg-white/90 shadow-lg hover:shadow-xl text-lg px-8 transition-all font-semibold"
          >
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
