import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AlertCircle, Phone, Clock, Shield } from "lucide-react";

export default function Emergency() {
  const emergencySituations = [
    "Sudden severe pain or chest pain",
    "Difficulty breathing or shortness of breath",
    "Severe bleeding that won't stop",
    "Sudden confusion or loss of consciousness",
    "Severe allergic reactions",
    "Fall with potential head injury",
    "Signs of stroke (facial drooping, arm weakness, speech difficulty)",
    "Severe medication reaction",
  ];

  const steps = [
    {
      title: "Call Our Emergency Line",
      description: "Dial +251 911 234567 immediately",
      icon: Phone,
    },
    {
      title: "Stay Calm",
      description: "Provide clear information about the situation",
      icon: Shield,
    },
    {
      title: "Follow Instructions",
      description: "Our team will guide you through next steps",
      icon: Clock,
    },
  ];

  return (
    <Layout>
      {/* Hero - Emergency Alert */}
      <section className="py-24 bg-gradient-to-br from-destructive/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
              <AlertCircle className="h-10 w-10 text-destructive" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              24/7 Emergency Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              If you or your loved one is experiencing a medical emergency, we're here to help immediately.
            </p>
            <a href="tel:+251911234567">
              <Button variant="destructive" size="lg" className="text-lg h-16 px-8 animate-pulse">
                <Phone className="mr-3 h-6 w-6" />
                Call +251 911 234567 NOW
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Counts as Emergency */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              When to Call Emergency Line
            </h2>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-lg mb-6 text-muted-foreground">
                Call our emergency line immediately if you notice any of these situations:
              </p>
              <ul className="space-y-3">
                {emergencySituations.map((situation, index) => (
                  <motion.li
                    key={situation}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{situation}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Immediate Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow these steps when you contact our emergency line
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Availability */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">We're Always Here</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our emergency response team is available 24 hours a day, 7 days a week,
              365 days a year. You're never alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+251911234567">
                <Button variant="hero" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  +251 911 234567
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
