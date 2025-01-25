"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    company: "",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Project"],
    Url: "/"
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    company: "",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Project"],
    Url: "/"
  },
  {
    id: 3,
    title: "E-commerce Application",
    company: "",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Project"],
    Url: "/"
  },
  {
    id: 4,
    title: "Software Developer",
    company: "SFU Blueprint",
    description: "Built responsive web apps with React and Next.js for SFU Blueprint and Our Community Bikes, enhancing usability for 1,500+ users and streamlining workflows for 500+ volunteers.",
    image: "/images/projects/Blueprint2.png",
    tag: ["All", "Experience"],
    Url: "https://www.linkedin.com/company/sfu-blueprint/posts/?feedView=all"

  },
  {
    id: 5,
    title: "Software Engineering Intern",
    description: "Designed and implemented a custom web-based ticketing system with Google Scripts and Python, optimizing logistics for 500 attendees and improving operational efficiency by 30%",
    company: "Wheel For Oneness",
    image: "/images/projects/wheel-for-oneness.jpg",
    tag: ["All", "Experience"],
    Url: "https://www.linkedin.com/in/wheel-for-oneness-%E6%A5%B5%E5%9C%B0%E5%90%8C%E8%A1%8C-8a15b3295/?originalSubdomain=hk"

  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Technial Experience">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Technial Experience
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              company = {project.company}
              description={project.description}
              imgUrl={project.image}
              Url={project.Url}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
