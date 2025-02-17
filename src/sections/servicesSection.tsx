"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const services: { title: string; text: string }[] = [
  {
    title: "REGULAR CHECK-UPS",
    text: "Our routine appointments are designed to keep your pet healthy at all stages of life. With comprehensive examinations and expert advice, we are committed to providing a long and happy life for your pet.",
  },
  {
    title: "FULL VACCINATION",
    text: "We offer a personalized vaccination program, tailored to the individual needs of your pet. Keep your pet protected from disease with our comprehensive immunization options, ensuring a healthy life.",
  },
  {
    title: "SURGICAL INTERVENTIONS",
    text: "Our experienced team performs surgeries and medical procedures with the highest standard of care. From diagnosis to recovery, we guarantee a smooth experience for you and your pet, always focusing on the health and comfort of your pet.",
  },
  {
    title: "A HEALTHY SMILE",
    text: "Oral health is crucial to the overall well-being of your pet.We offer veterinary dental services, including cleaning, extractions and home care guidelines, to ensure a healthy and lasting smile.",
  },
  {
    title: "PERSONALIZED FEEDING",
    text: "We develop customized nutritional plans to meet the specific needs of your pet. From special diets to advice on healthy eating, we help ensure optimal nutrition for a vibrant life.",
  },
  {
    title: "IMMEDIATE HELP",
    text: "We are available 24 hours a day, 7 days a week, to deal with veterinary emergencies. When your pet needs urgent care, our dedicated team is ready to provide immediate and compassionate assistance.",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="Services"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full flex-col items-center justify-center gap-6 p-5 md:items-start md:justify-start">
          <div className="text-center md:text-start">
            <span className="text-xl font-light text-powerblue-light">
            SERVICES
            </span>
            <h2 className="text-3xl font-bold xl:text-4xl">
            First-rate services for your pet!
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                className="flex flex-col items-start justify-start rounded-bl-2xl rounded-tr-2xl bg-powerblue-dark p-5 text-white"
                key={index}
              >
                <h4 className="mb-2 font-bold">{service.title}</h4>
                <p className="text-sm font-light">{service.text}</p>
              </div>
            ))}
          </div>

          <Button
            className="h-14 w-full text-base font-medium text-white"
            color="primary"
            endContent={<IoCalendarOutline size={30} className="ml-2" />}
          >
            Scedule Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
