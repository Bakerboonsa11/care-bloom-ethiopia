import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="premium-card rounded-2xl p-6 hover-lift"
    >
      <div className="flex flex-col h-full">
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 glow-effect group-hover:scale-110 transition-transform">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        <Link to={link}>
          <Button variant="ghost" className="w-full justify-start px-0 text-primary hover:text-primary/80">
            Learn more →
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
