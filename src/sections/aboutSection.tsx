"use client";
import Image from "next/image";
import React from "react";

import AboutMosaic from "../../public/aboutmosaic.png";
import { TbTargetArrow } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="About"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full min-w-[50%] flex-col items-center justify-center gap-6 p-5">
          <div className="text-center">
            <span className="text-xl font-light text-powerblue-light">
              ABOUT
            </span>
            <h2 className="text-3xl font-bold xl:text-4xl">
            Discover what makes POWERVET so amazing!
            </h2>
          </div>
          <p className="text-center text-sm font-light md:text-base xl:text-lg">
          Welcome to POWERVET, where passion for animals meets excellence veterinary. Since our founding, we have been dedicated to provide exceptional care for pets that they are part of your family. Here at POWERVET, we understand that every animal is unique, and it is with this understanding that we shape our approach to veterinary care.
          </p>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-powerblue-dark p-5 text-center xl:p-8">
            <span className="flex items-center justify-center gap-4 text-2xl font-bold text-powerblue-light xl:text-4xl">
              <TbTargetArrow size={50} /> OUR MISSION
            </span>
            <p className="mt-5 text-sm font-extralight text-white md:text-base">
            At POWERVET, our mission is to promote the health and well-being of pets, offering high-quality veterinary services quality. We believe that every pet deserves a healthy and happy, and we are committed to providing elite care.
            </p>
          </div>
        </div>

        <Image
          ref={refQuote}
          src={AboutMosaic}
          alt="Mosaico de imagens da POWERVET"
          sizes="100vw"
          width={0}
          height={0}
          className="aspect-square h-auto w-full min-w-[50%] p-5"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
