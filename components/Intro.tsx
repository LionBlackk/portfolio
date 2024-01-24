"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      id="home"
      className="mb-28 max-w-[44rem] text-center sm:mb-0 scroll-mt-[100rem] "
      ref={ref}
    >
      <div
        className="
          flex items-center justify-center 
      "
      >
        <div className="relative">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              src="/logo.jpg"
              alt="Hoang Vo"
              width={192}
              height={192}
              className="rounded-full border-[0.35rem] border-white h-24 w-24 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Hoàng.</span> I&apos;m a{" "}
        <span className="font-bold">web developer.</span> I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js) and Node.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center font-medium gap-2 px-4 text-lg sm:flex-row"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href="#contact"
          className="
            group flex items-center gap-2 bg-gray-900 px-7 py-3 rounded-full text-white 
            outline-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition 
          "
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="./CV.pdf"
          className="
            group flex items-center gap-2 bg-white px-7 py-3 rounded-full 
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
            dark:bg-white/10 dark:text-white
          "
          download
        >
          Download CV{" "}
          <BiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.facebook.com/clone.hoang.vo"
          className="
            flex items-center gap-2 bg-white p-4 rounded-full text-gray-700
            outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition
            border border-black/10
            dark:bg-white/10 dark:text-white
          "
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/LionBlackk"
          className="
            flex items-center gap-2 bg-white p-4 rounded-full text-gray-700
            outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition
            border border-black/10
            dark:bg-white/10 dark:text-white
          "
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/lionblackk/"
          className="
            flex items-center gap-2 bg-white p-4 rounded-full text-gray-700
            outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition
            border border-black/10
            dark:bg-white/10 dark:text-white
          "
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
