"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { TagFilter } from "@/components/tag-filter";
import { projects, ProjectTag } from "@/data/projects";

const allTags: ProjectTag[] = ["ML", "Backend", "Frontend", "Cloud", "Systems", "Mobile"];

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);

  useEffect(() => {
    const tagsParam = searchParams.get("tags");
    if (tagsParam) {
      const tags = tagsParam.split(",").filter((tag): tag is ProjectTag =>
        allTags.includes(tag as ProjectTag)
      );
      setSelectedTags(tags);
    }
  }, [searchParams]);

  const handleTagToggle = (tag: ProjectTag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    updateURL(newTags);
  };

  const handleClearAll = () => {
    setSelectedTags([]);
    updateURL([]);
  };

  const updateURL = (tags: ProjectTag[]) => {
    const params = new URLSearchParams();
    if (tags.length > 0) {
      params.set("tags", tags.join(","));
    }
    router.push(`/projects?${params.toString()}`, { scroll: false });
  };

  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter((project) =>
        selectedTags.some((tag) => project.tags.includes(tag))
      );

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        title="Projects"
        description="A collection of projects I've worked on, from machine learning applications to full-stack web development."
        className="text-center mb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Filter by Technology</h3>
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearAll={handleClearAll}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">
            No projects found matching the selected filters.
          </p>
        </motion.div>
      )}
    </div>
  );
}