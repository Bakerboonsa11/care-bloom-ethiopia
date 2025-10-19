import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Heart,
  Activity,
  Users,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import heroImage from "./../../public/dr6.jpg";

export default function Index() {
  const services = [
    {
      icon: Stethoscope,
      title: "Private Doctor Consultations",
      description: "Board-certified physicians providing comprehensive medical examinations, diagnoses, and treatment plans at your home.",
      link: "/services/skilled-nursing",
    },
    {
      icon: Heart,
      title: "Specialized Medical Care",
      description: "Expert doctors in cardiology, internal medicine, geriatrics, and chronic disease management visiting you regularly.",
      link: "/services/personal-care",
    },
    {
      icon: Activity,
      title: "Medical Procedures & Therapy",
      description: "Licensed medical professionals performing treatments, injections, wound care, and rehabilitation programs at home.",
      link: "/services/therapy",
    },
    {
      icon: Users,
      title: "Elderly & Chronic Care",
      description: "Dedicated physicians specializing in geriatric medicine, dementia care, and ongoing health monitoring.",
      link: "/services/dementia-care",
    },
  ];

  const testimonials = [
    {
      name: "Alem Tesfaye",
      relation: "Daughter of Patient",
      content: "The caregivers are incredibly professional and caring. My mother feels safe and comfortable, and I have peace of mind knowing she's in good hands 24/7.",
      rating: 5,
    },
    {
      name: "Dr. Yohannes Bekele",
      relation: "Referring Physician",
      content: "I regularly refer my patients to Health Home Care. Their skilled nursing team is exceptional, and they maintain excellent communication with our clinic.",
      rating: 5,
    },
    {
      name: "Marta Solomon",
      relation: "Family Caregiver",
      content: "After my father's surgery, the post-operative care was outstanding. The nurses were knowledgeable, kind, and helped him recover faster than expected.",
      rating: 5,
    },
  ];

  const howItWorks = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "Contact us for a no-obligation consultation. We'll discuss your needs and answer all questions.",
    },
    {
      icon: Stethoscope,
      title: "Care Assessment",
      description: "A registered nurse visits your home to assess needs and create a personalized care plan.",
    },
    {
      icon: Users,
      title: "Start Care",
      description: "Meet your caregiver team and begin receiving compassionate, professional care immediately.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            height: "100%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Licensed & Certified Caregivers
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Expert Doctors Delivering{" "}
                <span className="gradient-text">Premium Care</span>{" "}
                at Your Home
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Board-certified physicians providing personalized medical care, consultations, and treatments in the comfort of your home. Available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Book a Visit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+251 492 74918">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Clock className="mr-2 h-5 w-5" />
                    Call Now — 24/7
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>5,000+ Patients Served</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium <span className="gradient-text">Medical Services</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert physicians providing comprehensive healthcare at your doorstep
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started with quality home care is simple and stress-free
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="hero" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Families Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from patients and their loved ones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
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
            className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for <span className="gradient-text">Expert Medical Care</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our board-certified doctors today. Available 24/7 to provide premium medical care at your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:+251911234567">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Clock className="mr-2 h-5 w-5" />
                  Call +251 492 74918
                  
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
