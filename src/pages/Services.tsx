import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Target, 
  TrendingUp, 
  Users, 
  GraduationCap,
  CheckCircle2,
  FileText,
  Lightbulb,
  BarChart3
} from "lucide-react";

const Services: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Consulting & Strategy",
      subtitle: "Strategic Foundations",
      description: "Stop guessing. We audit your current revenue engine, design your Go-To-Market strategy, and optimize your Tech Stack (CRM/Automation) to ensure you are ready to scale.",
      content: [
        {
          heading: "Revenue Architecture Audit",
          text: "Deep-dive analysis of your current sales, marketing, and customer success operations. We identify bottlenecks, inefficiencies, and missed opportunities."
        },
        {
          heading: "GTM Strategy Design",
          text: "Custom go-to-market frameworks tailored to your ICP, market positioning, and growth stage. We define your sales motion, pricing strategy, and channel mix."
        },
        {
          heading: "Tech Stack Optimization",
          text: "CRM configuration (HubSpot, Salesforce), marketing automation setup, analytics implementation, and integration architecture to create a unified revenue operations system."
        },
        {
          heading: "Playbook Development",
          text: "Documented processes, templates, and frameworks your team can execute immediately."
        }
      ],
      deliverables: [
        "Comprehensive revenue operations audit report",
        "Custom GTM strategy document",
        "Tech stack implementation roadmap",
        "Sales and marketing playbooks"
      ],
      idealFor: "Pre-seed to Series A startups needing strategic clarity before scaling; SMBs with stagnant growth seeking a fresh approach.",
      imagePosition: "left"
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing Execution",
      subtitle: "Revenue Generation",
      description: "The engine room. We deploy fractional Sales Leaders and Marketers to run outbound campaigns, manage pipelines, and close high-ticket deals on your behalf.",
      content: [
        {
          heading: "Outbound Campaign Management",
          text: "End-to-end execution of cold outreach via email, LinkedIn, and phone. We handle list building, messaging, sequencing, and follow-up."
        },
        {
          heading: "Pipeline Management",
          text: "Active management of your sales pipeline from lead qualification to close. We run discovery calls, demos, and negotiations."
        },
        {
          heading: "Deal Closing",
          text: "Senior closers who handle complex B2B sales cycles, enterprise negotiations, and contract finalization."
        },
        {
          heading: "Marketing Execution",
          text: "Content creation, demand generation campaigns, SEO/SEM management, and lead nurturing automation."
        },
        {
          heading: "Fractional Leadership",
          text: "Embedded VP of Sales or CMO working 10-40 hours per week, providing strategic direction and hands-on execution."
        }
      ],
      deliverables: [
        "Qualified pipeline generation",
        "Closed revenue (we take accountability for targets)",
        "Campaign performance reports",
        "Sales collateral and pitch decks"
      ],
      idealFor: "Startups needing immediate revenue traction; companies between hires; businesses testing new markets or products.",
      imagePosition: "right"
    },
    {
      icon: Users,
      title: "Account Management & Customer Success",
      subtitle: "Retention & Growth",
      description: "Closing is just the start. We build onboarding flows, reduce churn, and implement upsell systems to maximize Customer Lifetime Value (LTV).",
      content: [
        {
          heading: "Customer Onboarding Systems",
          text: "Structured onboarding workflows that reduce time-to-value and increase product adoption. We create onboarding playbooks, email sequences, and success milestones."
        },
        {
          heading: "Churn Reduction Programs",
          text: "Proactive health monitoring, early warning systems, and intervention strategies to retain at-risk customers."
        },
        {
          heading: "Upsell & Expansion Frameworks",
          text: "Identify expansion opportunities, build upsell playbooks, and execute account growth strategies to increase revenue per customer."
        },
        {
          heading: "Customer Success Operations",
          text: "Implement CS platforms (Gainsight, ChurnZero), define success metrics, and establish QBR (Quarterly Business Review) processes."
        },
        {
          heading: "Fractional CS Leadership",
          text: "Embedded Customer Success leaders who build and manage your CS function."
        }
      ],
      deliverables: [
        "Customer onboarding playbook",
        "Churn analysis and reduction plan",
        "Upsell pipeline and closed expansion revenue",
        "CS operations documentation"
      ],
      idealFor: "SaaS companies with growing customer bases; businesses experiencing high churn; companies ready to focus on LTV optimization.",
      imagePosition: "left"
    },
    {
      icon: GraduationCap,
      title: "Corporate & Leadership Training",
      subtitle: "Team Empowerment",
      description: "Building your internal capabilities. We train your teams on modern sales methodologies, negotiation, and leadership to turn B-players into A-players.",
      content: [
        {
          heading: "Sales Methodology Training",
          text: "MEDDIC, Challenger Sale, SPIN Selling, and consultative selling frameworks. We train your team on proven methodologies that drive consistent results."
        },
        {
          heading: "Negotiation & Closing Skills",
          text: "Advanced negotiation tactics, objection handling, and closing techniques for complex B2B deals."
        },
        {
          heading: "Leadership Development",
          text: "Training for sales managers and executives on coaching, performance management, and building high-performing teams."
        },
        {
          heading: "Revenue Operations Training",
          text: "Educate your team on CRM best practices, pipeline management, forecasting, and data-driven decision making."
        },
        {
          heading: "Custom Workshops",
          text: "Tailored training programs addressing your specific challenges, industry, and sales motion."
        }
      ],
      deliverables: [
        "Custom training curriculum",
        "Workshop facilitation (virtual or in-person)",
        "Training materials and resources",
        "Post-training coaching and reinforcement"
      ],
      idealFor: "Companies building internal sales teams; organizations with underperforming sales reps; businesses preparing for rapid scaling.",
      imagePosition: "right"
    }
  ];

  const comparison = [
    {
      category: "Traditional Consultants",
      points: [
        "Deliver PowerPoint decks",
        "Charge for advice, not results",
        "Leave after the presentation",
        "No accountability for outcomes"
      ]
    },
    {
      category: "Internal Hires",
      points: [
        "6-12 month ramp time",
        "High salary + equity cost",
        "Risk of bad fit",
        "Limited to one person's expertise"
      ]
    },
    {
      category: "Launch & Close",
      points: [
        "Execute alongside your team",
        "Accountable for revenue targets",
        "Flexible engagement models",
        "Access to senior operators immediately"
      ],
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            The 4 Pillars of Revenue Operations
          </h1>
          <p className="text-xl text-muted-foreground">
            We don't just consult. We execute across every stage of your revenue engine—from strategy to closing to retention.
          </p>
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section 
          key={index} 
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
              <div className={pillar.imagePosition === 'right' ? 'xl:order-2' : ''}>
                <GlassCard className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <pillar.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-primary font-medium">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <div className="space-y-6">
                    {pillar.content.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-foreground mb-2 flex items-center text-base">
                          <Lightbulb className="w-4 h-4 text-accent mr-2" />
                          {item.heading}
                        </h4>
                        <p className="text-muted-foreground text-base leading-relaxed pl-6">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className={pillar.imagePosition === 'right' ? 'xl:order-1' : ''}>
                <div className="space-y-6">
                  <GlassCard>
                    <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                      <FileText className="w-5 h-5 text-primary mr-2" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {pillar.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="font-bold text-foreground mb-4 flex items-center text-base">
                      <BarChart3 className="w-5 h-5 text-accent mr-2" />
                      Ideal For
                    </h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {pillar.idealFor}
                    </p>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Why Choose Launch & Close?
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Operators, Not Consultants
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparison.map((item, index) => (
              <GlassCard 
                key={index}
                className={item.highlight ? 'border-2 border-primary' : ''}
              >
                <h3 className={`text-xl font-bold mb-6 text-center ${
                  item.highlight ? 'text-primary' : 'text-foreground'
                }`}>
                  {item.category}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${
                        item.highlight ? 'text-primary' : 'text-muted-foreground'
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Your Revenue Engine
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our flexible engagement models designed for your stage and goals
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 shadow-glow text-lg px-8"
          >
            <Link to="/how-we-work">Explore Engagement Models</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
