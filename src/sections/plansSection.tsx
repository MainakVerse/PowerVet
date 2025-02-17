"use client";
import { Button, Divider } from "@nextui-org/react";
import { TbShieldCheck } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const plansBasic: { title: string; text: string }[] = [
  {
    title: "Unlimited Routine Consultations",
    text: "Schedule routine appointments at no additional cost, ensuring your pet receives regular preventative attention.",
  },
  {
    title: "Complete Vaccination",
    text: "All essential vaccines are included, protecting your pet against diseases all the most common diseases.",
  },
  {
    title: "Discounts in Surgical",
    text: "Schedule routine appointments at no additional cost, ensuring your pet receives regular preventative attention.",
  },
];

const plansPro: { title: string; text: string }[] = [
  {
    title: "Unlimited Laboratory Tests",
    text: "All tests necessary for an accurate diagnosis are included at no additional cost.",
  },
  {
    title: "Personalized Nutrition",
    text: "Receive expert guidance to create a diet tailored to your pet's specific needs.",
  },
  {
    title: "Monthly Home Care",
    text: "We offer the option of home care, providing convenience for you and comfort for your pet.",
  },
];

const PlansSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/plansbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      id="Plans"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10  bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 p-5 text-center text-white xl:max-w-[1380px]">
          <h4 className="flex items-center justify-center gap-5 text-xl font-bold uppercase lg:text-2xl">
          Invest in the health and happiness of your partner
          </h4>
          <p className="text-sm font-light md:text-base xl:text-lg">
          Subscription plans that provide a comprehensive approach to ensure your furry companion receives essential care.
          </p>

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex flex-col items-center justify-center">
              <span className="w-1/2 rounded-t-2xl bg-powerblue-light p-2 font-bold">
                Power BASIC
              </span>

              <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
                {plansBasic.map((basic, index) => (
                  <div key={index}>
                    <h4 className="font-bold">{basic.title}</h4>
                    <p className="text-sm font-light">{basic.text}</p>
                    <Divider className="mt-3" />
                  </div>
                ))}
                <span className="w-full text-3xl font-bold">$59.99/month</span>
              </div>

              <Button
                className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
                color="primary"
                endContent={<TbShieldCheck size={30} className="ml-2" />}
              >
                Obtain Advantages
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="w-1/2 rounded-t-2xl bg-powerblue-light p-2 font-bold">
                Power PRO
              </span>

              <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
                {plansPro.map((pro, index) => (
                  <div key={index}>
                    <h4 className="font-bold">{pro.title}</h4>
                    <p className="text-sm font-light">{pro.text}</p>
                    <Divider className="mt-3" />
                  </div>
                ))}
                <span className="w-full text-3xl font-bold">$99.99/month</span>
              </div>

              <Button
                className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
                color="primary"
                endContent={<TbShieldCheck size={30} className="ml-2" />}
              >
                Obtain Advantages
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlansSection;
