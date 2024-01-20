"use client";
import React from "react";
import { motion } from "framer-motion";
const Divider = () => {
  return (
    <motion.div
      className="h-16 w-1 bg-gray-300 rounded-full my-28 hidden sm:block"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.125,
      }}
    ></motion.div>
  );
};

export default Divider;
