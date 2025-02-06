"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className="lg:py-16 md:py-12 md:mb-4 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 h-full">
        <div className="col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <h1 className="text-white  text-xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#6a98f0] to-[#b19cd9]">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Terry Kwok 👋",
                  1000,
                  "a Web Developer",
                  1000,
                  "a Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <div className="flex flex-row pt-4 gap-2">
              <div>
                <a
                  href="#contact"
                  className="px-4 py-3 inline-block w-full sm:w-auto rounded-lg bg-gradient-to-tr to-[#6a98f0] from-[#b19cd9] text-white font-semibold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mt-3"
                >
                  <span className="block bg-transparent rounded-lg px-3/5 py-3/5 text-xs">
                    Contact Me
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://drive.google.com/file/d/1UCoDisRUjHeczfZC2YVmOwxB9nVc0rsh/view?usp=drive_link"
                  target="_blank"
                  className="px-4 py-3 inline-block w-full sm:w-auto rounded-lg bg-gradient-to-tr to-[#6a98f0] from-[#b19cd9] text-white font-semibold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mt-3"
                >
                  <span className="block bg-transparent rounded-lg px-1/2 py-1/2 text-xs">
                    View My Resume
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-row pt-4 gap-2">
            <Link href="https://github.com/terry9041">
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width={32}
                height={32}
                className="fill-current text-[#6a98f0]"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/sfu-terry/">
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width={32}
                height={32}
                className="fill-current text-[#6a98f0]"
              />
            </Link>
          </div>
          </motion.div>
        </div>
        <div className="col-span-5 flex items-center justify-center">
          <Suspense fallback={<p>Loading Scene...</p>}>
            <Scene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;