"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Code, Zap } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillBadge } from "@/components/skill-badge";
import { personalInfo, education } from "@/data/links";
import { skills } from "@/data/skills";

export default function AboutPage() {
  const languageSkills = skills.filter((skill) => skill.category === "Languages");
  const frameworkSkills = skills.filter((skill) => skill.category === "Tools/Frameworks");

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        title="About Me"
        description="Get to know more about my background, interests, and what drives my passion for technology."
        className="text-center mb-12"
      />

      <div className="max-w-4xl mx-auto space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Background
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold">{education.institution}</h3>
                <p className="text-muted-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Interests & Passions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50"
                  >
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <SectionHeader
            title="Technical Skills"
            description="A comprehensive overview of the technologies and tools I work with."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
                <CardDescription>
                  Languages I use for development and problem-solving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((skill, index) => (
                    <SkillBadge key={skill.name} name={skill.name} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Frameworks</CardTitle>
                <CardDescription>
                  Technologies and tools that power my development workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworkSkills.map((skill, index) => (
                    <SkillBadge key={skill.name} name={skill.name} index={index} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
}