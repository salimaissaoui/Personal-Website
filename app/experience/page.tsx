"use client";

import { SectionHeader } from "@/components/section-header";
import { TimelineItem } from "@/components/timeline-item";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        title="Experience"
        description="My professional journey in software engineering and technology."
        className="text-center mb-12"
      />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}