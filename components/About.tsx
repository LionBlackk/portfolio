"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
const About = () => {
  return (
    <motion.section
      className="text-center mb-24 max-w-[45rem] leading-8 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a third-year student majoring in{" "}
        <span className="font-medium">Information Technology</span> at the Da
        Nang University of Technology.{" "}
        <span className="font-medium">
          My passion for programming led me to specialize in full-stack web
          development
        </span>
        . <span className="italic">I find joy in problem-solving</span> and
        cherish the satisfaction of overcoming coding challenges. My core
        technology stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I am proficient in TypeScript and Prisma. I am always eager to
        explore and learn new technologies. Currently, I am seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I indulge in
        playing video games, watching movies, and spending quality time with my
        dog. I am also passionate about{" "}
        <span className="font-medium">continuous learning</span> and am
        currently exploring topics related to{" "}
        <span className="font-medium">history and philosophy.</span>
      </p>
    </motion.section>
  );
};

export default About;
