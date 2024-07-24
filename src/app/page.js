"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <main className="flex flex-col justify-center h-full mt-2 md:flex-row md:items-center">
        {/* image container */}
        <div className="relative mb-16 h-1/2 md:flex-1 md:w-full">
          <Image src="/oscar1.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="flex flex-col justify-center gap-4 text-center h-1/2 md:flex-1 md:gap-4">
          <h1 className="text-3xl font-semibold tracking-wide text-center lg:4xl">
            Front-end / Full-stack Developer
          </h1>
          <div className="italic tracking-widest uppercase lg:text-xl">
            <Typewriter
              options={{
                strings: [
                  "Who-loves-to-code.tsx",
                  "Would-like-to-learn and improve.js",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="tracking-wide md:text-xl opacity-80 md:my-4">
            Passionate and driven frontend developer with a strong background in
            both frontend and backend technologies. With a proven track record
            of multitasking and quick learning, I bring a highly organized and
            metric-oriented approach to every project.
          </p>
          {/* buttons */}
          <div className="flex justify-center gap-6">
            <Link href="/portfolio">
              <button className="p-4 bg-[#7979F7] rounded ring-1 ring-black">
                View All Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 bg-[#EB494A] rounded ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
