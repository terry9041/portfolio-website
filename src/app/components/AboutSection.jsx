"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-xs">
        <li>Next.js</li>
        <li>React</li>
        <li>Jest</li>
        <li>Python</li>
        <li>Spring Boot</li>
        <li>Hibernate</li>
        <li>JUnit</li>
        <li>Git</li>
        <li>Linux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Simon Fraser University
          <ul className="list-disc pl-5 text-xs">
            <li>Bachelor of Science in Computing Science</li>
            <li>GPA: 3.89/4.33</li>
            <li>Awards: SFU Alumni Scholarship (Summer 2024)</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="lg:py-16 px-8 lg:px-40">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-8">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <div className="space-y-4 text-base md:text-sm leading-relaxed">
            <p>
              I am a driven and aspiring software developer with a passion for transforming innovative ideas into user-friendly software solutions. Currently serving as a Software Developer at SFU Blueprint, I excel at working collaboratively within a team. I thrive on tackling complex challenges, expanding my skill set, and fostering meaningful connections.
            </p>
            <p>
              When I&apos;m not writing code, you might find me in the kitchen trying out new recipes — it’s a bit like solving a tricky bug. And when it’s time to relax, I enjoy some smooth jazz with its unexpected rhythms, much like the surprises in programming 🎷🎶
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-4">
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;