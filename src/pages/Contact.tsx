import React, { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Clock,
  CheckCircle2,
  Calendar
} from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companyUrl: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! We'll respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      companyUrl: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeline = [
    {
      time: "Minutes 0-10",
      title: "Discovery",
      items: [
        "We'll ask about your current revenue operations",
        "Understand your goals, challenges, and timeline",
        "Learn about your team, market, and product"
      ]
    },
    {
      time: "Minutes 10-20",
      title: "Assessment",
      items: [
        "Share our initial observations",
        "Identify quick wins and strategic opportunities",
        "Discuss potential approaches and engagement models"
      ]
    },
    {
      time: "Minutes 20-30",
      title: "Next Steps",
      items: [
        "Determine if there's a fit",
        "Outline potential scope and timeline",
        "Answer your questions about our process"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is there any cost for the strategy call?",
      answer: "No. The initial call is completely free and there's no obligation to work together."
    },
    {
      question: "What if I'm not sure which engagement model I need?",
      answer: "That's exactly what the strategy call is for. We'll recommend the best approach based on your situation."
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes. We're happy to sign mutual NDAs before discussing sensitive information."
    },
    {
      question: "How quickly can you start?",
      answer: "Depending on our current capacity, we can typically start new engagements within 1-2 weeks."
    },
    {
      question: "What if we're not ready to commit yet?",
      answer: "No problem. We can stay in touch and reconnect when the timing is right."
    },
    {
      question: "Do you work with companies outside the US?",
      answer: "Yes. We work with clients globally and are experienced with remote collaboration."
    }
  ];

  const trustBadges = [
    { icon: CheckCircle2, text: "Confidential & Secure" },
    { icon: CheckCircle2, text: "No Commitment Required" },
    { icon: Clock, text: "30-Minute Call" },
    { icon: Mail, text: "Response Within 24 Hours" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Let's Talk About Your Revenue Engine
          </h1>
          <p className="text-xl text-muted-foreground">
            Book a 30-minute strategy call. No pitch, no pressure—just an honest conversation about where you are and what's possible.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Book Your Strategy Call
              </h2>
              <GlassCard className="mb-8">
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Calendly booking widget would be embedded here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Choose a time that works for you. You'll receive a calendar invite and prep questionnaire to make our conversation as valuable as possible.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Prefer to Send a Message?
              </h2>
              <GlassCard>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyUrl">Company URL</Label>
                    <Input
                      id="companyUrl"
                      type="url"
                      value={formData.companyUrl}
                      onChange={(e) => handleChange('companyUrl', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Which service interests you?</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulting">Consulting & Strategy</SelectItem>
                        <SelectItem value="sales">Sales & Marketing Execution</SelectItem>
                        <SelectItem value="cs">Account Management & CS</SelectItem>
                        <SelectItem value="training">Corporate Training</SelectItem>
                        <SelectItem value="unsure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your challenge</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            What Happens on the Call?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {timeline.map((phase, index) => (
              <GlassCard key={index}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{phase.time}</p>
                    <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <GlassCard>
            <h3 className="text-xl font-bold text-foreground mb-4">Post-Call</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  If there's mutual interest, we'll send a detailed proposal within 48 hours
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  If we're not the right fit, we'll recommend other resources or partners
                </span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Other Ways to Reach Us
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            We typically respond within 24 hours on business days
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Email</h3>
              </div>
              <a 
                href="mailto:hello@launchandclose.com"
                className="text-primary hover:underline"
              >
                hello@launchandclose.com
              </a>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center space-x-3 mb-2">
                <Linkedin className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">LinkedIn</h3>
              </div>
              <a 
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Launch & Close LinkedIn Profile
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Common Questions Before Booking
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <GlassCard key={index}>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Predictable Revenue?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's start the conversation today
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 shadow-glow text-lg px-8"
          >
            <a href="#top">Book Your Strategy Call Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
