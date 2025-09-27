import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
  index?: number;
}

export function TimelineItem({ experience, index = 0 }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-start space-x-4">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg z-10" />
          {index < 3 && <div className="w-0.5 h-24 bg-border mt-2" />}
        </div>

        <Card className="flex-1 hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex flex-col space-y-1">
              <CardTitle className="text-lg">{experience.title}</CardTitle>
              <CardDescription className="text-base font-medium text-primary">
                {experience.company}
                {experience.department && ` • ${experience.department}`}
              </CardDescription>
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2 mb-4">
              {experience.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="text-sm text-muted-foreground flex items-start">
                  <span className="mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            {experience.technologies && experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}