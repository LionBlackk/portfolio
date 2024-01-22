"use client";
import { ProjectProps } from "@/lib/types";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";

const Project = ({
  title,
  description,
  imageUrl,
  srcUrl,
  tags,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[44rem] border border-black/5
        rounded-lg overflow-hidden sm:h-[20rem] sm:pr-8
        relative hover:bg-gray-200 transition sm:group-even:pl-16
      "
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
        flex flex-col h-full sm:group-even:ml-[17rem]
      "
        >
          <div className="flex items-center justify-between ">
            <h3 className="font-semibold text-2xl">{title}</h3>
            <a
              href={srcUrl}
              className="
              bg-white px-4 py-2 rounded-full border border-black/20
              hover:scale-[1.15] transition 
          "
            >
              <BsGithub />
            </a>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm line-clamp-3">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => {
              return (
                <li
                  key={index}
                  className="
                text-white bg-black/[0.7] rounded-full px-3 py-1 text-[0.7rem] uppercase
                tracking-wider
              "
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="image of project"
          quality={95}
          className="
          absolute -right-32 hidden sm:block w-[28.25rem] rounded-t-lg shadow-xl 
          top-[62px] h-full object-cover group-even:-left-[8rem] group-even:right-[initial] transition
          group-even:object-right group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3
          group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3
        "
        />
      </section>
    </motion.div>
  );
};

export default Project;
