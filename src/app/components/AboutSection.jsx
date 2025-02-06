"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
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
    <section className="text-white px-32" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <div className="space-y-4 text-base lg:text-sm leading-relaxed">
          <p>
  I&apos;m a full-stack developer based in Vancouver with a passion for building clean and intuitive web experiences. For my past year, I have delved into learning different areas of CS, from programming paradigms to deployment practices. And now I&apos;m exploring different web architectures and experimenting with computer graphics 🚀
</p>
<p> When I am not coding, you can find me playing a round of pool 🎱 - this is a game that requires focus and patience, much like solving a difficult bug. And when I get curved, I enjoy the smooth rhythm of Jazz, with its unexpected turn, like a surprise in programming 🎷🎶 </p>
  
  
</div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
