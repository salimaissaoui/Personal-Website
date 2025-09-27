import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  index?: number;
}

export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant="secondary"
        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
      >
        {name}
      </Badge>
    </motion.div>
  );
}