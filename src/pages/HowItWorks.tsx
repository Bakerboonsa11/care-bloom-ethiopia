import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Phone,
  ClipboardCheck,
  FileText,
  Users,
  Calendar,
  Shield,
  CreditCard,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call our 24/7 helpline or fill out our online form to schedule a free consultation.",
      details: [
        "Speak with a care coordinator",
        "Discuss your immediate needs",
        "Ask any questions",
        "No obligation required",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Free Home Assessment",
      description: "A registered nurse visits your home to evaluate care needs and safety.",
      details: [
        "Comprehensive health evaluation",
        "Home safety assessment",
        "Review medical history",
        "Understand family preferences",
      ],
    },
    {
      icon: FileText,
      title: "Personalized Care Plan",
      description: "We create a tailored care plan designed around your unique needs and goals.",
      details: [
        "Customized service selection",
        "Care schedule planning",
        "Budget-friendly options",
        "Clear pricing breakdown",
      ],
    },
    {
      icon: Users,
      title: "Meet Your Care Team",
      description: "Get introduced to your matched caregivers and review their qualifications.",
      details: [
        "Background-checked professionals",
        "Personality matching",
        "Language preferences",
        "Emergency backup coverage",
      ],
    },
    {
      icon: Calendar,
      title: "Start Care",
      description: "Begin receiving professional, compassionate care on your preferred schedule.",
      details: [
        "Flexible start dates",
        "Smooth onboarding process",
        "Family training if needed",
        "24/7 support hotline",
      ],
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "Regular check-ins, care plan updates, and continuous quality monitoring.",
      details: [
        "Monthly progress reviews",
        "Care plan adjustments",
        "Family communication",
        "Quality assurance visits",
      ],
    },
  ];

  const pricingInfo = [
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "We accept cash, bank transfer, and work with major insurance providers.",
    },
    {
      icon: Shield,
      title: "Insurance Accepted",
      description: "We partner with leading insurance companies and help process claims.",
    },
    {
      icon: FileText,
      title: "Transparent Pricing",
      description: "No hidden fees. Clear, upfront pricing based on services and hours.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Getting started with quality home care is simple and stress-free.
              Here's our proven process from first contact to ongoing care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow glass-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-8 mt-4 mb-4 h-8 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Payment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible, transparent pricing designed to fit your budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover-lift"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule your free consultation today and take the first step toward quality home care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button variant="hero" size="lg">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+251911234567">
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +251 911 234567
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
