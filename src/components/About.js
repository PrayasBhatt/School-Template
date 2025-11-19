"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2, 
        ease: "easeOut"
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="flex items-center">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};


const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          
          <motion.div
            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
              variants={itemVariants}
            >
              <motion.div variants={imageVariants}>
                <Image
                  className="rounded-xl object-cover"
                  src="/logo.png"
                  alt="About Us image 1"
                  width={500}
                  height={600}
                />
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div variants={imageVariants}>
                <Image
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src="/logo.png"
                  alt="About Us image 2"
                  width={500}
                  height={600}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <motion.div
                className="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                variants={itemVariants}
              >
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed buildings but also built
                  enduring connections that define our success story.
                </p>
              </motion.div>

]              <motion.div
                className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
                variants={itemVariants}
              >
                
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <AnimatedCounter value={33} suffix="+" />
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Years of Experience
                  </h6>
                </div>

                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <AnimatedCounter value={125} suffix="+" />
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Successful Projects
                  </h6>
                </div>

                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <AnimatedCounter value={52} suffix="+" />
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
              
              </motion.div>
            </div>

            <motion.button
              className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              variants={itemVariants}
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Read More
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;