import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Award, Heart, Shield, Users, Target, Globe } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every patient deserves care delivered with empathy, dignity, and respect.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We build lasting relationships through transparency, reliability, and excellence.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous training and quality standards ensure the highest level of care.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We partner with families to create personalized care plans that work for everyone.",
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
              About Health Home Care
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 15 years, we've been Ethiopia's trusted partner in home healthcare,
              bringing professional medical care and compassionate support directly to families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={teamPhoto}
                  alt="Health Home Care Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver exceptional, compassionate home healthcare that empowers
                  individuals to maintain their independence, dignity, and quality of life
                  in the comfort of their own homes.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be Ethiopia's leading home healthcare provider, recognized for
                  innovation, clinical excellence, and unwavering commitment to improving
                  lives through personalized care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              15 years of dedication to home healthcare excellence
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2010",
                title: "Founded",
                description: "Started with a small team of 10 caregivers serving Addis Ababa families.",
              },
              {
                year: "2015",
                title: "Expansion",
                description: "Grew to 100+ caregivers and launched specialized dementia care programs.",
              },
              {
                year: "2020",
                title: "Innovation",
                description: "Introduced telehealth services and remote patient monitoring systems.",
              },
              {
                year: "2025",
                title: "Leadership",
                description: "Now serving 5,000+ patients with 200+ qualified healthcare professionals.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
