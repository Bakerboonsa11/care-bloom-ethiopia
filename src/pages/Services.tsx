import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import {
  Stethoscope,
  Heart,
  Activity,
  Users,
  Pill,
  Brain,
  Home,
  Video,
  Clock,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "24/7 Skilled Nursing Care",
      description: "Professional registered nurses providing post-operative care, IV therapy, wound management, and chronic disease monitoring around the clock.",
      link: "/services/skilled-nursing",
    },
    {
      icon: Heart,
      title: "Personal Care & Daily Living",
      description: "Compassionate assistance with bathing, dressing, mobility, grooming, meal preparation, and medication reminders for daily independence.",
      link: "/services/personal-care",
    },
    {
      icon: Activity,
      title: "Physical & Occupational Therapy",
      description: "Licensed therapists helping you regain strength, mobility, and independence through personalized at-home rehabilitation programs.",
      link: "/services/therapy",
    },
    {
      icon: Brain,
      title: "Dementia & Alzheimer's Care",
      description: "Specialized memory care with trained staff providing safe, structured routines, cognitive stimulation, and compassionate support.",
      link: "/services/dementia-care",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Professional medication administration, schedule tracking, refill coordination, and education to ensure proper medication compliance.",
      link: "/services/medication",
    },
    {
      icon: Home,
      title: "Palliative & End-of-Life Care",
      description: "Dignified, compassionate care focused on comfort, pain management, and emotional support for patients and families.",
      link: "/services/palliative-care",
    },
    {
      icon: Users,
      title: "Companion & Respite Care",
      description: "Friendly companionship, conversation, and activities while giving family caregivers essential breaks and peace of mind.",
      link: "/services/companion-care",
    },
    {
      icon: Video,
      title: "Telehealth & Remote Monitoring",
      description: "Virtual consultations, vital sign monitoring, and remote health tracking for convenient, proactive care management.",
      link: "/services/telehealth",
    },
    {
      icon: Clock,
      title: "Post-Surgery Recovery",
      description: "Specialized post-operative care including wound care, pain management, mobility assistance, and recovery monitoring at home.",
      link: "/services/post-surgery",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Care Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive home healthcare services designed around your unique needs,
              delivered by licensed professionals who care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation and our care coordinators will help you find the perfect care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+251911234567" className="btn-primary">
                Call +251 911 234567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
