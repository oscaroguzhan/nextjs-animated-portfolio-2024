"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";


const AnimationTransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    // to prevent these animation run sometime use mode
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-[#141925] text-white">
        {/* create a div with black background and animate */}
        <motion.div
          className="w-screen h-screen fixed rounded-b-[100px] bg-[#252D40] z-40 "
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 m-auto text-white uppercase cursor-default w-fit h-fit text-7xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="w-screen h-screen fixed rounded-t-[100px] bg-[#252D40] z-30 bottom-0"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-36 bg-[#252D40]">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-9rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default AnimationTransitionProvider;
