import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import therapyCareImage from "@/assets/therapy-care.jpg";

export default function Blog() {
  const blogPosts = [
    {
      title: "5 Essential Tips for Family Caregivers",
      excerpt: "Caring for a loved one at home can be rewarding but challenging. Learn practical strategies to avoid burnout and maintain your well-being.",
      category: "Caregiving Tips",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: therapyCareImage,
    },
    {
      title: "Understanding Post-Surgery Home Care",
      excerpt: "What to expect after surgery and how professional home care can speed recovery and prevent complications.",
      category: "Medical Guidance",
      date: "January 10, 2025",
      readTime: "7 min read",
      image: therapyCareImage,
    },
    {
      title: "Dementia Care: Creating a Safe Home Environment",
      excerpt: "Practical modifications and strategies to make your home safer and more comfortable for loved ones with dementia.",
      category: "Caregiving Tips",
      date: "January 5, 2025",
      readTime: "6 min read",
      image: therapyCareImage,
    },
    {
      title: "The Benefits of Physical Therapy at Home",
      excerpt: "Why home-based rehabilitation can be more effective and comfortable than clinic visits for many patients.",
      category: "Medical Guidance",
      date: "December 28, 2024",
      readTime: "5 min read",
      image: therapyCareImage,
    },
    {
      title: "Nutrition Tips for Elderly Care",
      excerpt: "Essential dietary guidelines and meal planning strategies for maintaining health and vitality in older adults.",
      category: "Local Resources",
      date: "December 20, 2024",
      readTime: "8 min read",
      image: therapyCareImage,
    },
    {
      title: "Managing Chronic Conditions at Home",
      excerpt: "How skilled nursing care helps patients with diabetes, COPD, and heart disease manage their conditions effectively at home.",
      category: "Medical Guidance",
      date: "December 15, 2024",
      readTime: "6 min read",
      image: therapyCareImage,
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Resources & Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert advice, caregiving tips, and health resources to support you and your loved ones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {["All Posts", "Caregiving Tips", "Medical Guidance", "Local Resources"].map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="mt-4 px-0 group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
