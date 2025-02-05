"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 px-32">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#6a98f0] to-[#4961dc]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Terry",
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
            {/* <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link> */}
            <a
              href="https://drive.google.com/file/d/1UCoDisRUjHeczfZC2YVmOwxB9nVc0rsh/view?usp=drive_link"
              target="_blank"
              className="px-4 py-3 inline-block w-full sm:w-auto rounded-lg bg-gradient-to-tr from-[#6a98f0] to-[#4961dc] text-white font-semibold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mt-3"
            >
              <span className="block bg-transparent rounded-lg px-2/3 py-2/3 text-xs font-light">
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
