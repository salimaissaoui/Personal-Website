"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectTag } from "@/data/projects";

interface TagFilterProps {
  tags: ProjectTag[];
  selectedTags: ProjectTag[];
  onTagToggle: (tag: ProjectTag) => void;
  onClearAll: () => void;
}

export function TagFilter({ tags, selectedTags, onTagToggle, onClearAll }: TagFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2"
    >
      <Button
        variant={selectedTags.length === 0 ? "default" : "outline"}
        size="sm"
        onClick={onClearAll}
        className="transition-all"
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTags.includes(tag) ? "default" : "outline"}
          size="sm"
          onClick={() => onTagToggle(tag)}
          className="transition-all"
        >
          {tag}
        </Button>
      ))}
    </motion.div>
  );
}