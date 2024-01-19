"use client";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="
          fixed w-full h-[4.5rem] top-0 left-1/2 rounded-none bg-white border border-white border-opacity-40 bg-opacity-80
          shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
          sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full
          dark:border-black/40 dark:bg-opacity-75
        "
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="
            flex w-[22rem] flex-wrap items-center justify-center
            gap-y-1 text-[0.9rem] font-medium text-gray-500
            sm:w-[initial] sm:flex-nowrap sm:gap-5
            "
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
            >
              <Link
                href="#"
                className="
                  flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition
                dark:text-gray-500 dark:hover:text-gray-300
                "
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
