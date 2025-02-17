"use client";
import Image from "next/image";
import values01 from "../../public/values01.png";
import values02 from "../../public/values02.png";

import { BsFillPatchCheckFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const values: { title: string; text: string }[] = [
  {
    title: "Commitment to Excellence",
    text: "We strive for excellence in all aspects of our services, from routine consultations to complex surgical procedures. Our commitment is to provide the highest standard of veterinary care.",
  },
  {
    title: "Empathy and Affection",
    text: "We understand the importance of the bond between you and your pet. Our people are chosen not only for their professional experience, but also for their empathy and affection for animals.",
  },
  {
    title: "Transparency and Communication",
    text: "We value open and transparent communication. We want you to be fully informed about treatment options for your pet, allowing you to make informed decisions.",
  },
];

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/valuesbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      >
        <h2
          className="flex items-center justify-center gap-5 text-2xl md:text-3xl font-bold text-white "
          id="Values"
        >
          OUR VALUES <BsFillPatchCheckFill size={50} />
        </h2>

        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row">
            <div
              className="mx-auto flex w-full max-w-[80%] flex-col items-center justify-center gap-5 md:flex-col lg:max-w-md lg:pl-8"
              ref={refQuote}
            >
              <Image
                src={values01}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-7 px-8 text-center">
              {values.map((value, index) => (
                <div key={index} className="w-full max-w-3xl">
                  <p className="mx-auto w-[80%] rounded-t-2xl bg-powerblue-light p-2 font-bold text-white md:w-[60%]">
                    {value.title}
                  </p>
                  <p className="rounded-2xl bg-white p-5 text-sm font-light text-black md:text-base xl:text-lg">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
