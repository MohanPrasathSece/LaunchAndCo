import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  TrendingDown,
  UserX,
  Zap,
  Target,
  Users,
  TrendingUp,
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Home: React.FC = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Pipeline Stagnation",
      subtitle: "Great product, but the sales motion isn't predictable."
    },
    {
      icon: UserX,
      title: "Hiring Mistakes",
      subtitle: "Wasted 6 months and $150k on a VP of Sales who didn't deliver."
    },
    {
      icon: Zap,
      title: "Scale Chaos",
      subtitle: "Growing too fast with no systems to handle retention."
    }
  ];

  const solutions = [
    {
      icon: Target,
      label: "Strategic Foundations",
      description: "GTM design, tech stack optimization, revenue architecture"
    },
    {
      icon: TrendingUp,
      label: "Revenue Generation",
      description: "Outbound campaigns, pipeline management, deal closing"
    },
    {
      icon: Users,
      label: "Retention & Growth",
      description: "Onboarding systems, churn reduction, upsell frameworks"
    },
    {
      icon: GraduationCap,
      label: "Team Empowerment",
      description: "Sales methodology, negotiation skills, leadership development"
    }
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Audit & Design",
      duration: "Week 1-2"
    },
    {
      phase: "Phase 2",
      title: "Build & Deploy",
      duration: "Week 3-8"
    },
    {
      phase: "Phase 3",
      title: "Optimize & Scale",
      duration: "Week 9+"
    }
  ];

  const metrics = [
    { value: "$50M+", label: "Total revenue generated for clients" },
    { value: "85%", label: "Average increase in qualified pipeline" },
    { value: "6 months", label: "Average time to full team transfer" }
  ];

  const testimonials = [
    {
      quote: "Launch & Close didn't just give us a strategy deck—they built our entire sales engine and closed our first $500K in ARR.",
      author: "Founder, SaaS Startup"
    },
    {
      quote: "We avoided a costly VP of Sales hire and got senior execution for a fraction of the cost. Best decision we made.",
      author: "CEO, B2B Tech Company"
    },
    {
      quote: "They operated like an internal team but brought external expertise we couldn't afford full-time.",
      author: "Investor, Growth Equity"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-foreground mb-5 leading-tight tracking-tight font-['DM_Sans']">
              Transform Your
              <span className="block">Revenue Engine</span>
            </h1>
            <p className="text-base sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto font-['DM_Sans']">
              Senior GTM leadership without the full-time headcount.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              We build, operate, and transfer revenue engines for startups and SMBs.
              From GTM strategy to closing deals, we are your execution partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                <Link to="/how-we-work">
                  View Engagement Models
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 text-lg px-10 py-6 transition-all font-semibold backdrop-blur-sm"
              >
                <Link to="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Why Founders Get Stuck
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Common challenges that prevent startups from scaling predictably
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <GlassCard key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-primary font-medium text-lg">
                  {point.subtitle}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              We Don't Just Advise. We Execute.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end revenue operations delivered by operators who have built, scaled, and exited.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <GlassCard key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <solution.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.label}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {solution.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            From Strategy to Execution in 3 Phases
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our proven process for building sustainable revenue engines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <GlassCard key={index}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div >
      </section >

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Trusted by Founders Who Demand Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <GlassCard key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground text-lg">{metric.label}</p>
              </GlassCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index}>
                <p className="text-foreground text-lg mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-base text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>


    </div >
  );
};

export default Home;
