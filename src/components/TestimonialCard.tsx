import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  relation: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, relation, content, rating }: TestimonialProps) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "fill-accent text-accent" : "text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed">{content}</p>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted-foreground">{relation}</div>
      </div>
    </div>
  );
}
