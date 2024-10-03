"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    
    title: "My first React portfolio project",
    desc: "Portfolio app created to practice to react",
    img: "/project1.png",
    link: "https://codeguruozzy.com",
  },
  {
    id: 2,
    
    title: "Job Finder",
    desc: "Vue 3 app with typescript",
    img: "/project5.png",
    link: "https://fanciful-chimera-360946.netlify.app/",
  },{
    id: 3,
    
    title: "Maverick Mall",
    desc: "Modern Fullstack e-commerce app with Wordpress",
    img: "/project4.png",
    link: "https://ecommerce-next-sanity-i73kdfivd-oscaroguzhan.vercel.app/",
  },{
    id: 4,
    
    title: "React movie character app ",
    desc: "Basic React app, fetch API, CSS3",
    img: "/project3.png",
    link: "https://github.com/oscaroguzhan/React-Game-of-thrones-App",
  }
  ,{
    id: 5,
    
    title: "Modern E-wallet application ",
    desc: "Part of a javascript course project with React, Redux, Material Ui, GitHub",
    img: "/project6.png",
    link: "https://github.com/oscarwergun/project-ewallet",
  }
  ,{
    id: 6,
    
    title: "Task Tracker- Vue3 ",
    desc: "Task tracker with vue-3 that has CRUD functionality",
    img: "/project2.png",
    link: "https://vue3-task-tracker.netlify.app/",
  }
  ,{
    id: 7,
    
    title: "MERN-booking.com-clone-app ",
    desc: "It is a full stack-MERN booking.com clone client-side ",
    img: "/project7.png",
    link: "https://github.com/oscaroguzhan/mern-booking-app-frontend",
  }
  ,{
    id: 8,
    
    title: "React-redux bankomat app ",
    desc: "Understanding react and redux basics ",
    img: "/project8.png",
    link: "https://github.com/oscaroguzhan/react-redux-bankomat-app",
  }
  
  
];


const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[800vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-9rem)] flex items-center justify-center text-5xl md:text-6xl lg:text-7xl text-center">
          Some of My Works
        </div>
        <div className="sticky top-0 flex items-center h-screen gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="z-40 flex items-center justify-center w-screen h-screen rounded-lg " />
            {projects.map((project) => (
              <div
                className="flex items-center justify-center w-screen h-screen rounded-lg bg-gradient-to-r from-[#5754f6] to-[#b343c6]"
                key={project.id}
              >
                <div className="flex flex-col gap-8 rounded-lg">
                  <h1 className="py-2 mt-4 text-2xl font-bold text-center text-black opacity-85 md:text-3xl lg:text-4xl">
                    {project.title}
                  </h1>
                  <div className="relative w-72 h-96 md:w-84 md:h-64 lg:w-96 lg:h-[350px] xl:w-120 xl:h-[420px] flex justify-center items-center text-center mx-auto mt-24" >
                    <Image src={project.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] mt-16 text-center italic tracking-wide text-black opacity-85 text-xl md:text-2xl lg:text-3xl">
                    {project.desc}
                  </p>
                  <Link href={project.link} className="flex justify-center cursor-pointer ">
                    <button className="px-6 py-3 mb-4 text-sm font-semibold text-white bg-[#33354D] rounded md:p-4 md:text-md lg:py-4 lg:px-8 lg:text-lg hover:bg-[#EF4444] transition-all duration-300">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000" className="">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Fullstack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-16 h-16 m-auto text-white bg-black rounded-full md:w-28 md:h-28 hover:bg-[#EF4444] transition-all duration-300 animate-pulse"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
