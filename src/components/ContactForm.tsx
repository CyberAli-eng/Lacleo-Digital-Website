import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setShowForm(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowSuccess(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Quality Leads <span className="text-primary">When They Matter Most</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation and uncover new growth opportunities.
            </p>
            
            {!showForm && !showSuccess && (
              <Button 
                onClick={toggleForm}
                variant="cta" 
                size="lg"
                className="text-lg px-8 py-3"
              >
                Book a Free Consultation
              </Button>
            )}
          </div>

          {/* Success Message */}
          {showSuccess && (
            <Card className="max-w-2xl mx-auto shadow-large">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-lg text-muted-foreground">
                  Your consultation request has been received. Our team will contact you within 24 hours.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Contact Form */}
          {showForm && (
            <Card className="max-w-2xl mx-auto shadow-large animate-in slide-in-from-top duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your lead generation needs..."
                      className="w-full min-h-[120px] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <Button
                      type="button"
                      onClick={toggleForm}
                      variant="outline"
                      className="sm:w-auto"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="sm:w-auto"
                    >
                      Reach Out to Our Experts
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                    <p>
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and allow LaCleo Digital Private Limited to contact you with updates, 
                      offers, and promotional content. You may unsubscribe anytime using 
                      the link in our emails.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;