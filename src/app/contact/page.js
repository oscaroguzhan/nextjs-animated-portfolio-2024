"use client";
import React from "react";
import { motion } from "framer-motion";
const ContactPage = () => {
  const message = " Let's get in touch";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center h-full px-8 lg:flex-row sm:px-12 md:px-16 lg:px-24 xl:px-48">
        {/* text container */}
        <div className="flex items-center text-4xl h-1/2 lg:h-full lg:w-1/2">
          {message.split("/n").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              className="text-center uppercase"
            >
              {letter}
            </motion.span>
            
          ))}
          <span className="ml-2"> 😀</span>
         
        </div>
        {/* form container */}
        <form className="h-1/2">text</form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
