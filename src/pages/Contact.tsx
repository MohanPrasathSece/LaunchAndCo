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
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-accent uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to accelerate your revenue growth? Share your challenges and we'll show you how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left form column */}
          <GlassCard className="h-full">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-4">
                Send us a message
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share a bit about your company and what you'd like help with. We'll reply with a clear next step within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-2 text-base h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="mt-2 text-base h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-base">Company name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  required
                  className="mt-2 text-base h-12"
                />
              </div>

              <div>
                <Label htmlFor="companyUrl" className="text-base">Company URL</Label>
                <Input
                  id="companyUrl"
                  type="url"
                  value={formData.companyUrl}
                  onChange={(e) => handleChange("companyUrl", e.target.value)}
                  className="mt-2 text-base h-12"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-base">What do you need help with?</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                >
                  <SelectTrigger className="mt-2 text-base h-12">
                    <SelectValue placeholder="Select a focus area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">GTM & revenue strategy</SelectItem>
                    <SelectItem value="sales">Sales & pipeline execution</SelectItem>
                    <SelectItem value="cs">Customer success & retention</SelectItem>
                    <SelectItem value="training">Team training & enablement</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-base">Anything else we should know?</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className="mt-2 text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6">
                <p className="text-sm text-muted-foreground max-w-xs">
                  By submitting, you're okay with us contacting you about this inquiry. No newsletter, no spam.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-background hover:bg-white/90 text-lg px-8 py-6 shadow-lg font-semibold"
                >
                  Send message
                </Button>
              </div>
            </form>
          </GlassCard>

          {/* Right contact details column */}
          <div className="space-y-8">
            <GlassCard>
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-foreground mb-3">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to get in touch with our team
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 text-lg">Where we work</p>
                    <p className="text-base text-muted-foreground leading-relaxed">Remote-first team working primarily with B2B companies in North America, UK, and Europe.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 text-lg">Best email</p>
                    <p className="text-base text-muted-foreground leading-relaxed">hello@launchandclose.com — we read every message.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 text-lg">Typical hours</p>
                    <p className="text-base text-muted-foreground leading-relaxed">Monday–Friday, 9am–5pm in your nearest timezone. We'll always try to accommodate yours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 text-lg">Calls</p>
                    <p className="text-base text-muted-foreground leading-relaxed">We'll share a private calendar link for a 30-minute working session after we review your note.</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground mb-2 text-lg">Connect with us</p>
                  <p className="text-base text-muted-foreground">Follow our latest updates</p>
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-smooth"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Response Time Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Clock className="text-primary" size={28} />
          </div>
          <h3 className="text-3xl font-semibold text-foreground mb-4">
            Quick Response Guaranteed
          </h3>
          <p className="text-muted-foreground text-xl leading-relaxed">
            We respond to all inquiries within 24 hours. Usually much faster.
          </p>
        </div>
      </section>
    </div>
  );
}
  ;

export default Contact;
