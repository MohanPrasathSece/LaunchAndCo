import React, { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/services/emailService";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    companyUrl: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `Contact from ${formData.companyUrl}`,
        message: `Company URL: ${formData.companyUrl}\nPhone: ${formData.phone}\nService Needed: ${formData.serviceNeeded}\n\nMessage:\n${formData.message}`
      });

      // Show confirmation dialog
      setShowConfirmation(true);

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll respond within 24 hours.",
      });

      setFormData({
        name: "",
        companyUrl: "",
        email: "",
        phone: "",
        serviceNeeded: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 min-h-[50vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-accent uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Build Your Revenue Engine?
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you build a predictable, scalable revenue engine.
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
                <Label htmlFor="companyUrl" className="text-base">Company URL *</Label>
                <Input
                  id="companyUrl"
                  value={formData.companyUrl}
                  onChange={(e) => handleChange("companyUrl", e.target.value)}
                  placeholder="https://yourcompany.com"
                  required
                  className="mt-2 text-base h-12"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                <div>
                  <Label htmlFor="phone" className="text-base">Phone number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-2 text-base h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="serviceNeeded" className="text-base">What do you need? *</Label>
                <Select value={formData.serviceNeeded} onValueChange={(value) => handleChange("serviceNeeded", value)} required>
                  <SelectTrigger className="mt-2 text-base h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strategy">Strategy (Consulting/Fractional)</SelectItem>
                    <SelectItem value="execution">Execution (Sales/CS Teams)</SelectItem>
                    <SelectItem value="tech">Tech (Web/App/AI Build)</SelectItem>
                    <SelectItem value="everything">Everything (The Full Stack)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-base">Additional details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us more about your specific needs..."
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
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </GlassCard>

          {/* Right contact details column */}
          <div className="space-y-8">
            <GlassCard>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Quick Response Guaranteed
              </h3>
              <p className="text-muted-foreground text-xl leading-relaxed mb-4">
                We respond to all inquiries within 24 hours. Usually much faster.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team is ready to understand your unique challenges and provide tailored solutions that drive real revenue growth.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <GlassCard className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80"
                  alt="Professional customer support team ready to assist with revenue operations"
                  className="w-full h-[300px] object-cover rounded-lg"
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
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Message Sent!</DialogTitle>
            <DialogDescription className="text-center text-lg pt-2">
              Thanks for reaching out! We've received your message and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              variant="secondary"
              className="w-full sm:w-auto min-w-[120px]"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div >
  );
}
  ;

export default Contact;
