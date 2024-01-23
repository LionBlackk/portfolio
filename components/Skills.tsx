"use client";
import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { SkillItemProps } from "@/lib/types";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};
const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      className="mt-28 mb-28 scroll-mt-52 sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex items-center justify-center max-w-[54rem] flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </ul>
    </section>
  );
};

const SkillItem = ({
  skill,
  index,
}: {
  skill: SkillItemProps;
  index: number;
}) => {
  return (
    <motion.li
      className="p-4 border border-black/[0.1] rounded-xl"
      custom={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {skill}
    </motion.li>
  );
};

export default Skills;
