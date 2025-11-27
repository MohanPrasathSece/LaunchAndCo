import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Layers, 
  Clock, 
  Zap,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Users,
  Calendar
} from "lucide-react";

const HowWeWork: React.FC = () => {
  const models = [
    {
      icon: Layers,
      title: "The B.O.T. Model",
      subtitle: "Build - Operate - Transfer",
      description: "Our signature model. We build your sales infrastructure, operate it to prove ROI, and then hire and train your internal team to take over. You keep the IP, the playbooks, and the momentum.",
      phases: [
        {
          title: "Build",
          duration: "Months 1-2",
          objective: "Establish revenue foundations",
          activities: [
            "Conduct comprehensive revenue audit",
            "Design GTM strategy and sales process",
            "Implement CRM and automation systems",
            "Develop sales playbooks and collateral",
            "Set up tracking and reporting infrastructure"
          ],
          deliverable: "Fully operational revenue engine ready for execution"
        },
        {
          title: "Operate",
          duration: "Months 3-6",
          objective: "Prove the model and generate revenue",
          activities: [
            "Execute outbound campaigns and pipeline generation",
            "Manage sales process from lead to close",
            "Implement customer success workflows",
            "Optimize based on real-time data",
            "Document all processes and learnings"
          ],
          deliverable: "Closed revenue, validated playbooks, performance benchmarks"
        },
        {
          title: "Transfer",
          duration: "Months 7-9",
          objective: "Build and empower your internal team",
          activities: [
            "Recruit and hire internal sales/CS team",
            "Train new hires on proven playbooks",
            "Shadow and coach during transition",
            "Transfer all systems, processes, and IP",
            "Provide ongoing advisory support"
          ],
          deliverable: "Fully trained internal team operating independently"
        }
      ],
      pricing: "Monthly retainer + performance bonus tied to revenue milestones",
      idealFor: "Series A-B startups ready to build a scalable revenue function; companies transitioning from founder-led sales; businesses needing proven systems before hiring."
    },
    {
      icon: Clock,
      title: "Fractional / Part-Time Contract",
      subtitle: "Executive Expertise on Demand",
      description: "Executive expertise on a flexible basis. Perfect for SMBs needing a VP of Sales or CMO strategy for 10-20 hours a week without the C-Suite salary.",
      features: [
        {
          title: "Flexible Time Commitment",
          description: "10, 20, or 40 hours per week based on your needs"
        },
        {
          title: "Senior-Level Expertise",
          description: "Access to VP and C-level operators with 10+ years of experience"
        },
        {
          title: "Strategic + Tactical",
          description: "We provide both strategic direction and hands-on execution"
        },
        {
          title: "No Long-Term Commitment",
          description: "Month-to-month contracts with 30-day notice"
        },
        {
          title: "Cost-Effective",
          description: "60-70% less expensive than a full-time executive hire"
        }
      ],
      useCases: [
        "Fractional VP of Sales to build and manage sales team",
        "Fractional CMO to design and execute marketing strategy",
        "Fractional Head of Customer Success to reduce churn",
        "Fractional RevOps leader to optimize systems and processes"
      ],
      included: [
        "Weekly strategic planning sessions",
        "Hands-on execution of key initiatives",
        "Team coaching and management",
        "Performance reporting and analytics",
        "Access to our playbooks and frameworks"
      ],
      pricing: "Monthly retainer based on hours committed",
      idealFor: "Bootstrapped startups; SMBs between executive hires; companies testing new markets; businesses needing interim leadership."
    },
    {
      icon: Zap,
      title: "Full-Time Placement",
      subtitle: "Embedded Execution",
      description: "Embedded execution. For high-growth phases, we integrate fully into your org chart to drive aggressive targets.",
      features: [
        {
          title: "Fully Embedded",
          description: "Our team member works as a full-time employee within your organization"
        },
        {
          title: "Immediate Impact",
          description: "No ramp time—we start executing from day one"
        },
        {
          title: "Aggressive Targets",
          description: "Designed for high-growth phases requiring intense focus"
        },
        {
          title: "Team Integration",
          description: "Participates in all team meetings, planning, and culture activities"
        },
        {
          title: "Flexible Duration",
          description: "3-12 month placements with option to convert to permanent hire"
        }
      ],
      scenarios: [
        "Rapid scaling phase requiring immediate sales leadership",
        "Product launch needing dedicated go-to-market execution",
        "Market expansion requiring local expertise",
        "Turnaround situations needing intensive intervention"
      ],
      included: [
        "40+ hours per week dedicated to your business",
        "Full participation in team operations",
        "Direct management of internal team members",
        "Accountability for specific revenue or operational targets",
        "Transition planning if converting to permanent hire"
      ],
      pricing: "Monthly retainer (equivalent to fractional C-suite cost) + performance incentives",
      idealFor: "Series B+ companies in hypergrowth; businesses with urgent revenue needs; companies preparing for fundraising or acquisition."
    }
  ];

  const comparisonTable = [
    {
      feature: "Time Commitment",
      bot: "9-12 months",
      fractional: "Ongoing, flexible",
      fullTime: "3-12 months"
    },
    {
      feature: "Hours per Week",
      bot: "20-40",
      fractional: "10-40",
      fullTime: "40+"
    },
    {
      feature: "Best For",
      bot: "Building from scratch",
      fractional: "Ongoing support",
      fullTime: "Hypergrowth phases"
    },
    {
      feature: "Knowledge Transfer",
      bot: "Full IP transfer",
      fractional: "Continuous advisory",
      fullTime: "Embedded execution"
    },
    {
      feature: "Team Building",
      bot: "Included",
      fractional: "Optional",
      fullTime: "Included"
    }
  ];

  const successStories = [
    {
      model: "B.O.T. Success",
      client: "Series A SaaS company",
      challenge: "Founder-led sales, no repeatable process",
      solution: "9-month B.O.T. engagement",
      results: "Built sales team of 5, generated $2M ARR, transferred fully operational revenue engine"
    },
    {
      model: "Fractional Success",
      client: "Bootstrapped B2B software company",
      challenge: "Needed sales leadership but couldn't afford full-time VP",
      solution: "Fractional VP of Sales, 20 hours/week",
      results: "3x pipeline growth in 6 months, closed first enterprise deals, trained internal AE"
    },
    {
      model: "Full-Time Success",
      client: "Series B company entering new market",
      challenge: "Aggressive expansion timeline, no local expertise",
      solution: "Full-time embedded sales leader for 6 months",
      results: "Established market presence, $1.5M in new market revenue, hired and trained local team"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Flexible Engagement Models Built for Your Stage
          </h1>
          <p className="text-xl text-muted-foreground">
            Whether you need a full revenue transformation or targeted fractional support, we have a model that fits your timeline, budget, and goals.
          </p>
        </div>
      </section>

      {models.map((model, index) => (
        <section 
          key={index} 
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-black/5' : 'bg-black/10'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <model.icon className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {model.title}
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                {model.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {model.description}
              </p>
            </div>

            {model.phases && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {model.phases.map((phase, idx) => (
                  <GlassCard key={idx}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-primary mb-4">
                      {phase.objective}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {phase.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-base">{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-medium text-foreground mb-1">Deliverable:</p>
                      <p className="text-base text-muted-foreground">{phase.deliverable}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}

            {model.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {model.features.map((feature, idx) => (
                  <GlassCard key={idx} hover={false}>
                    <h4 className="font-bold text-foreground mb-2 text-base">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-base">
                      {feature.description}
                    </p>
                  </GlassCard>
                ))}
              </div>
            )}

            {model.useCases && (
              <GlassCard className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Common Use Cases
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {model.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {model.scenarios && (
              <GlassCard className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  Common Scenarios
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {model.scenarios.map((scenario, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {model.included && (
              <GlassCard className="mb-8">
                <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent mr-2" />
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {model.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="font-bold text-foreground mb-2 flex items-center text-base">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Pricing Structure
                </h4>
                <p className="text-muted-foreground text-base">{model.pricing}</p>
              </GlassCard>
              <GlassCard>
                <h4 className="font-bold text-foreground mb-2 flex items-center text-base">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  Ideal For
                </h4>
                <p className="text-muted-foreground text-base">{model.idealFor}</p>
              </GlassCard>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Which Model Is Right for You?
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 text-foreground font-bold">Feature</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">B.O.T. Model</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">Fractional</th>
                  <th className="text-center py-4 px-4 text-foreground font-bold">Full-Time</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.bot}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.fractional}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.fullTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Real Results Across All Models
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <GlassCard key={index}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {story.model}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-2 text-base">{story.client}</h4>
                <div className="space-y-3 text-base">
                  <div>
                    <p className="font-medium text-muted-foreground">Challenge:</p>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Solution:</p>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Results:</p>
                    <p className="text-foreground">{story.results}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Not Sure Which Model Fits?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a strategy call and we'll recommend the right approach for your stage, goals, and budget.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 shadow-glow text-lg px-8"
          >
            <Link to="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
