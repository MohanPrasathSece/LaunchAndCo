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


  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black/50 pb-0">
        {/* Moon-like semi-circle background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] md:w-[1200px] h-[300px] sm:h-[450px] md:h-[600px] rounded-t-full bg-gradient-to-t from-blue-500/30 via-blue-400/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[750px] md:w-[1000px] h-[250px] sm:h-[375px] md:h-[500px] rounded-t-full bg-gradient-to-t from-blue-600/40 via-blue-500/25 to-transparent blur-xl"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Strategy. Talent. <br />
            <span className="text-white">
              Technology.
            </span>
          </h1>
          <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Complete Revenue Engine for Startups. We provide the Senior Leadership to plan it, the Dev Teams to build it, and the Sales Experts to close it.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center w-full">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white text-slate-900 hover:bg-slate-100 text-base md:text-base px-6 py-3 md:px-6 md:py-4 shadow-lg transition-all duration-300 font-semibold hover:scale-105 active:scale-95 h-auto min-h-0 max-w-[280px] sm:max-w-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Link to="/how-we-work" className="flex items-center justify-center">
                View Our Models
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full bg-white text-slate-900 hover:bg-slate-100 border border-white text-base md:text-base px-6 py-3 md:px-6 md:py-4 transition-all duration-300 font-semibold hover:scale-105 active:scale-95 h-auto min-h-0 max-w-[280px] sm:max-w-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Link to="/contact" className="flex items-center justify-center">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Triad Visual */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Complete Revenue Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three interconnected pillars that power your growth
            </p>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 relative z-10">
              {/* BUILD Circle */}
              <div className="text-center">
                <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40 mb-6">
                  {/* Glassy circle design with hover */}
                  <div className="relative w-full h-full rounded-full border-2 border-blue-400/30 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 hover:shadow-2xl hover:scale-105">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">BUILD</div>
                      <div className="text-xs lg:text-sm text-white/90 font-medium">Infrastructure</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Build</h3>
                <p className="text-muted-foreground text-sm lg:text-base max-w-xs mx-auto leading-relaxed">
                  Web, Apps, AI Agents. The digital foundation that powers your revenue engine.
                </p>
              </div>
              
              {/* LAUNCH Circle */}
              <div className="text-center">
                <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40 mb-6">
                  {/* Glassy circle design with hover */}
                  <div className="relative w-full h-full rounded-full border-2 border-blue-400/30 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 hover:shadow-2xl hover:scale-105">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">LAUNCH</div>
                      <div className="text-xs lg:text-sm text-white/90 font-medium">Strategy</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Launch</h3>
                <p className="text-muted-foreground text-sm lg:text-base max-w-xs mx-auto leading-relaxed">
                  GTM, Consulting, Training. Strategic guidance to market and scale effectively.
                </p>
              </div>
              
              {/* CLOSE Circle */}
              <div className="text-center">
                <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40 mb-6">
                  {/* Glassy circle design with hover */}
                  <div className="relative w-full h-full rounded-full border-2 border-blue-400/30 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-xl transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 hover:shadow-2xl hover:scale-105">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">CLOSE</div>
                      <div className="text-xs lg:text-sm text-white/90 font-medium">Execution</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Close</h3>
                <p className="text-muted-foreground text-sm lg:text-base max-w-xs mx-auto leading-relaxed">
                  Sales Teams, SDRs, Account Management. The human element that drives results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem/Solution Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stop Hiring Piecemeal.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most founders hire a Dev Agency for the product, a Consultant for the plan, and Recruiter for the sales team. The result? Disconnected systems and slow growth. Launch & Close brings the entire revenue stack under one roof.
          </p>
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

      {/* Team Collaboration Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <GlassCard className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80"
              alt="Professional team collaborating on revenue strategy in modern office"
              className="w-full h-[400px] object-cover rounded-lg"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            From Strategy to Execution in 3 Phases
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our proven process for building sustainable revenue engines
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <GlassCard key={index}>
                  <div className="flex items-center mb-2">
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
            <div>
              <GlassCard className="overflow-hidden h-full">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80"
                  alt="Revenue analytics dashboard showing growth metrics and KPIs"
                  className="w-full h-full min-h-[400px] object-cover rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <GlassCard className="overflow-hidden order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=80"
                alt="Strategic planning session for business growth and revenue acceleration"
                className="w-full h-[350px] object-cover rounded-lg"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </GlassCard>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Built by Operators, For Operators
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We've been in your shoes. Our team has collectively built revenue engines from $0 to $50M+, managed teams of 200+, and led successful exits.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Now we bring that experience directly to your business—without the overhead, risk, or lengthy ramp time of traditional hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white/5">
        <div className="absolute top-0 left-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Revenue Engine?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build a predictable, scalable revenue engine without the overhead of full-time hires.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact" className="flex items-center">
                Schedule a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link to="/how-we-work" className="flex items-center">
                Learn How We Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
