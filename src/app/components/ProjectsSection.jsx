"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 7,
    title: "React Portfolio Website",
    company: "",
    description: "Leveraged Next.js, Three.js to create a visually appealing and interactive portfolio website, showcasing projects and experiences.",
    image: "/images/projects/website.png",
    tag: ["All", "Project"],
    Url: "/"
  },
  {
    id: 3,
    title: "FabricFlow",
    company: "Client Project with FABCYCLE",
    description: "An all-in-one fabric management system that helps hobbyists and small businesses manage their fabric inventory, track projects. ",
    image: "/images/projects/fabricflow.png",
    tag: ["All", "Project"],
    Url: "https://github.com/terry9041/FabricFlow"
  },
  {
    id: 4,
    title: "SmartExpense",
    company: "Best Beginner Award, Stormhack V2",
    description: "AI-powered expense tracking app that uses OCR to scan receipts and automatically categorize expenses",
    image: "/images/projects/smartexpense2.png",
    tag: ["All", "Project"],
    Url: "https://github.com/qvd808/stormhack-v2-2024"
  },
  {
    id: 1,
    title: "Software Developer",
    company: "SFU Blueprint",
    description: "Engineered a volunteer management web app using React, Next.js, and PostgreSQL for Our Community Bikes.",
    image: "/images/projects/sfu-blueprint.png",
    tag: ["All", "Experience"],
    Url: "https://www.linkedin.com/company/sfu-blueprint/posts/?feedView=all"

  },
  {
    id: 2,
    title: "Software Engineering Intern",
    description: "Designed and implemented custom Python ticketing system and member data pipeline",
    company: "Wheel For Oneness",
    image: "/images/projects/wheel-for-oneness.jpg",
    tag: ["All", "Experience"],
    Url: "https://www.linkedin.com/in/wheel-for-oneness-%E6%A5%B5%E5%9C%B0%E5%90%8C%E8%A1%8C-8a15b3295/?originalSubdomain=hk"

  },
  {
    id: 6,
    title: "Custom Shell",
    description: "Custom shell with built-in commands and features such as piping, redirection, and background processes",
    company: "",
    image: "/images/projects/myshell.png",
    tag: ["All", "Project"],
    Url: "https://github.com/terry9041/my-shell"

  },
  {
    id: 5,
    title: "ImageFX",
    description: "A sleek Python-based Lightroom clone using tkinter. Effortlessly apply over 10 stunning image transformations, from grayscale and auto-level adjustments to sepia tone, edge detection, and an adjustable glitch effect.",
    company: "",
    image: "/images/projects/pyps.png",
    tag: ["All", "Project"],
    Url: "https://github.com/terry9041/my-shell"

  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData
    .filter((project) => project.tag.includes(tag))
    .sort((a, b) => a.id - b.id);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="px-8 text-center text-2xl font-bold text-white mt-8 mb-[3px] md:mb-4">
      Technical Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 pb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Experience"
          isSelected={tag === "Experience"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Project"
          isSelected={tag === "Project"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          
            <ProjectCard
              key={project.id}
              title={project.title}
              company = {project.company}
              description={project.description}
              imgUrl={project.image}
              Url={project.Url}
            />
          
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
