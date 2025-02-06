"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className="lg:py-16 px-32">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-center sm:text-left md:pl-8"
          > */}
            <h1 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr to-[#6a98f0] from-[#b19cd9]">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
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
            <div>
              <a
                href="https://drive.google.com/file/d/1UCoDisRUjHeczfZC2YVmOwxB9nVc0rsh/view?usp=drive_link"
                target="_blank"
                className="px-4 py-3 inline-block w-full sm:w-auto rounded-lg bg-gradient-to-tr to-[#6a98f0] from-[#b19cd9] text-white font-semibold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mt-3"
              >
                <span className="block bg-transparent rounded-lg px-3/5 py-3/5 text-xs">
                  Download Resume
                </span>
              </a>
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
          {/* </motion.div> */}
          
        </div>
        <div className="sm:col-span-4">
          <Suspense fallback={<p>Loading Scene...</p>}>
            <Scene />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
