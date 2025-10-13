import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Heart,
  Activity,
  Brain,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceData: Record<string, any> = {
  "skilled-nursing": {
    icon: Stethoscope,
    title: "24/7 Skilled Nursing Care",
    description: "Professional registered nurses providing comprehensive medical care in the comfort of your home.",
    includes: [
      "Post-operative wound care and monitoring",
      "IV therapy and medication administration",
      "Vital signs monitoring and reporting",
      "Chronic disease management (diabetes, COPD, heart disease)",
      "Catheter and feeding tube care",
      "Pain management and symptom control",
    ],
    whoProvides: "Registered Nurses (RN) with clinical certifications and ongoing training in home health protocols.",
    schedule: "Available 24/7 with flexible visit schedules based on your needs.",
    faqs: [
      {
        question: "How quickly can a nurse come to my home?",
        answer: "We offer same-day service for urgent needs. For scheduled care, we typically start within 24-48 hours of your initial consultation.",
      },
      {
        question: "Are your nurses licensed?",
        answer: "Yes, all our nurses are registered and licensed by the Ethiopian Ministry of Health. They undergo regular training and background checks.",
      },
      {
        question: "What if I need care overnight?",
        answer: "We provide 24/7 coverage including overnight shifts. You can request continuous care or periodic check-ins based on your needs.",
      },
    ],
  },
  "personal-care": {
    icon: Heart,
    title: "Personal Care & Daily Living Assistance",
    description: "Compassionate support with everyday activities to maintain independence and dignity at home.",
    includes: [
      "Bathing, grooming, and personal hygiene",
      "Dressing and mobility assistance",
      "Meal preparation and feeding support",
      "Light housekeeping and laundry",
      "Medication reminders",
      "Companionship and conversation",
    ],
    whoProvides: "Certified caregivers trained in personal care, patient dignity, and safety protocols.",
    schedule: "Flexible schedules from 2 hours/day to 24-hour live-in care.",
    faqs: [
      {
        question: "Can I choose my caregiver?",
        answer: "Yes! We match you with caregivers based on personality, language preferences, and specific needs. You can request changes anytime.",
      },
      {
        question: "What if my loved one has mobility challenges?",
        answer: "Our caregivers are trained in safe transfer techniques and mobility assistance. We can also arrange for physical therapy if needed.",
      },
    ],
  },
  "therapy": {
    icon: Activity,
    title: "Physical & Occupational Therapy",
    description: "Licensed therapists delivering personalized rehabilitation programs to restore strength and independence.",
    includes: [
      "Post-surgery rehabilitation",
      "Strength and balance training",
      "Mobility and gait training",
      "Pain management techniques",
      "Fall prevention strategies",
      "Adaptive equipment recommendations",
    ],
    whoProvides: "Licensed Physical Therapists (PT) and Occupational Therapists (OT) with home health experience.",
    schedule: "Typically 2-3 sessions per week, customized to your recovery goals.",
    faqs: [
      {
        question: "How long does therapy last?",
        answer: "Treatment duration varies by condition and goals. Most patients see significant improvement within 6-12 weeks.",
      },
      {
        question: "Do I need special equipment?",
        answer: "We bring necessary therapy equipment. If adaptive devices are needed long-term, we'll help you acquire them.",
      },
    ],
  },
  "dementia-care": {
    icon: Brain,
    title: "Dementia & Alzheimer's Care",
    description: "Specialized memory care providing safe, structured support for individuals with cognitive challenges.",
    includes: [
      "Memory-enhancing activities and routines",
      "Medication management and monitoring",
      "Safety supervision and fall prevention",
      "Behavioral support and redirection",
      "Nutritional support and meal assistance",
      "Family education and support resources",
    ],
    whoProvides: "Caregivers with specialized dementia training and experience in memory care techniques.",
    schedule: "Flexible from daily visits to 24/7 care based on disease progression.",
    faqs: [
      {
        question: "How do you handle behavioral challenges?",
        answer: "Our staff use evidence-based techniques for redirection, validation therapy, and creating calming environments. We work closely with families and physicians.",
      },
      {
        question: "Can family members be involved?",
        answer: "Absolutely! We encourage family participation and provide education on communication strategies and self-care.",
      },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button variant="hero">View All Services</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">What's Included</h2>
            <div className="glass-card rounded-2xl p-8">
              <ul className="space-y-4">
                {service.includes.map((item: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Provides & Schedule */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Who Provides Care</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{service.whoProvides}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Typical Schedule</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{service.schedule}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation to discuss your care needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button variant="hero" size="lg">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+251911234567">
                <Button variant="outline" size="lg">
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
