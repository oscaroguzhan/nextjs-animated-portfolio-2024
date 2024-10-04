"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import LottieAnimation from "../LottieAnimation.json";
const skills = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Vue.js",
  "JAVA",
  "AWS",
  "Docker",
  "MongoDB",
  "Node.js",
  "TailwindCSS",
  "Git",
  "Bootstrap/SASS",
  "PostgreSQL",
  "C#",
  "HTML5",
  "CSS3",
];
const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex">
        {/* text container */}
        <div className="flex flex-col w-full gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64/3 xl:1/2 lg:pr-0">
          {/* ABOUT  */}
          <div className="flex flex-col justify-center gap-12">
            <h1 className="mb-2 text-2xl tracking-wider uppercase text-bold">
              About Me
            </h1>
            <p className="text-xl tracking-wide">
              Passionate and driven frontend developer with a strong background
              in both frontend and backend technologies.
            </p>
            <ul className="flex flex-col gap-4 mt-12 ml-8 italic opacity-80 md:text-xl ">
              <li>
                ⭐️ Work proactively as an individual and as a flexible team
                member.
              </li>
              <li>⭐️ Social, curios, ambitious developer</li>
              <li>
                ⭐️ Work as a team leader in the food industry so have
                experience working with a team
              </li>
              <li>⭐️ Proud father for 3 wonderful kids </li>
            </ul>
            {/* scroll svg */}
            <div className="mt-4">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#fafafa"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#fafafa" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#fafafa"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* skills container */}
          <div className="flex flex-col justify-center gap-12">
            <h1 className="mb-2 text-2xl tracking-wider uppercase text-bold opacity-80">
              Skills
            </h1>
            {/* skill list */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 cursor-pointer bg-[#7979F7] py-2 rounded object-cover hover:bg-[#EB494A] ease-in-out transition-all tracking-wide text-[18px] md:text-[20px] md:px-6"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* skill scroll svg */}
            <div className="mt-4">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#fafafa"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#fafafa" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#fafafa"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* experiences */}
          <div className="flex flex-col justify-center gap-12 pb-24">
            <h1 className="pb-24 text-2xl tracking-wider uppercase text-bold opacity-80">
              Experiences /Education
              {/* experience list */}
              <div>
                {/* list items for experience */}
                <div className="flex justify-between h-[420px] ">
                  {/* left side */}
                  <div className="flex flex-col w-1/3 gap-2 ">
                    {/* job title */}
                    <h3 className="bg-[#7979F7] text-lg tracking-wider my-4 p-4  lg:p-6 rounded-b-lg rounded-s-lg text-center">
                      Front-end / Fullstack developer
                    </h3>
                    {/* job description */}
                    <div className="p-3 text-sm italic">
                      Utilized various tools and technologies such as Vue.js,
                      Vuex, Docker, SCSS, REST-API, Worked on another big
                      project with a back-end focus, creating REST APIs using
                      TypeScript, Swagger documentation, Zod validation, and
                      Jest testing.
                    </div>
                    {/* date */}
                    <div className="text-sm font-light text-[#EB494A]">
                      2023-02 / 2023-12
                    </div>
                    {/* company name */}
                    <div className="p-1 text-sm text-[#7979F7] rounded w-fit">
                      ZMARTA
                    </div>
                  </div>
                  {/* center */}
                  <div className="flex justify-center w-1/6">
                    {/* line */}
                    <div className="relative w-1 h-full rounded bg-slate-700">
                      {/* cirkle */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7979F7] bg-white -left-2 mt-4"></div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="w-1/3 "></div>
                </div>
                {/* list items for experience */}
                <div className="flex justify-between h-[420px]">
                  {/* left side */}
                  <div className="flex flex-col w-1/3 gap-2 "></div>
                  {/* center */}
                  <div className="flex justify-center w-1/6">
                    {/* line */}
                    <div className="relative w-1 h-full rounded bg-slate-700">
                      {/* cirkle */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7979F7] bg-white -left-2 mt-4"></div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="w-1/3">
                    {/* job title */}
                    <h3 className="bg-[#EB494A] text-lg tracking-wider my-2 p-2 rounded-b-lg rounded-s-lg text-center">
                      Front-end developer
                    </h3>
                    {/* job description */}
                    <div className="p-3 text-sm italic">
                      2 years education at EC Education as a Front End Developer
                      student. I have experience both front end and back end
                      operations such as React, JavaScript , Node.js, UX-Design
                      (Figma, Balsamic), HTML5,CSS3, SASS, Bootstrap, CMS,
                      Style-components, C++
                    </div>
                    {/* date */}
                    <div className="text-sm font-light text-[#EB494A]">
                      2021-01 / 2023-05
                    </div>
                    {/* company name */}
                    <div className="p-1 text-sm text-[#7979F7] rounded w-fit">
                      EC Education
                    </div>
                  </div>
                </div>
                <div className="flex justify-between h-96">
                  {/* left side */}
                  <div className="flex flex-col w-1/3 gap-2 ">
                    {/* job title */}
                    <h3 className="bg-[#7979F7] text-lg tracking-wider my-2 p-4 rounded-b-lg rounded-s-lg text-center">
                      Freelancer
                    </h3>
                    {/* job description */}
                    <div className="p-3 text-sm italic">
                      Self-Employ to improve and learn new technologies.
                    </div>
                    {/* date */}
                    <div className="text-sm font-light text-[#EB494A]">
                      2020 - Present
                    </div>
                  </div>
                  {/* center */}
                  <div className="flex justify-center w-1/6">
                    {/* line */}
                    <div className="relative w-1 h-full rounded bg-slate-700">
                      {/* cirkle */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7979F7] bg-white -left-2 mt-4"></div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="w-1/3"></div>
                </div>
                {/* list items for experience */}
                <div className="flex justify-between h-[420px]">
                  {/* left side */}
                  <div className="flex flex-col w-1/3 gap-2 "></div>
                  {/* center */}
                  <div className="flex justify-center w-1/6">
                    {/* line */}
                    <div className="relative w-1 h-full rounded bg-slate-700">
                      {/* cirkle */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7979F7] bg-white -left-2 mt-4"></div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="w-1/3">
                    {/* job title */}
                    <h3 className="bg-[#EB494A] text-lg tracking-wider my-2 p-2 rounded-b-lg rounded-s-lg text-center">
                      Lund University
                    </h3>
                    {/* job description */}
                    <div className="p-3 text-sm italic">
                      MSc in Molecular Biology focused on Stem cell Research
                    </div>
                    {/* date */}
                    <div className="text-sm font-light text-[#EB494A]">
                      2013 - 2015
                    </div>
                    {/* company name */}
                    <div className="p-1 text-sm text-[#7979F7] rounded w-fit">
                      EC Education
                    </div>
                  </div>
                </div>
                <div className="flex justify-between h-[420px] ">
                  {/* left side */}
                  <div className="flex flex-col w-1/3 gap-2 ">
                    {/* job title */}
                    <h3 className="bg-[#7979F7] text-lg tracking-wider my-4 p-4  lg:p-6 rounded-b-lg rounded-s-lg text-center">
                      Team Manager
                    </h3>
                    {/* job description */}
                    <div className="p-3 text-sm italic">
                      Plan and lead the daily operations at work with a team of
                      people to ensure the store runs smoothly. Together with
                      management team Responsible for the store&apos;s financial
                      performance.
                    </div>
                    {/* date */}
                    <div className="text-sm font-light text-[#EB494A]">
                      2022 / Present
                    </div>
                    {/* company name */}
                    <div className="p-1 text-sm text-[#7979F7] rounded w-fit">
                      Hemköp
                    </div>
                  </div>
                  {/* center */}
                  <div className="flex justify-center w-1/6">
                    {/* line */}
                    <div className="relative w-1 h-full rounded bg-slate-700">
                      {/* cirkle */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7979F7] bg-white -left-2 mt-4"></div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="w-1/3 "></div>
                </div>
              </div>
            </h1>
          </div>
        </div>
        {/* svg container */}
        <div className="sticky top-0 z-30 hidden w-1/3 xl:w-1/2 lg:block ">
          <div className="mt-36">
            <Lottie animationData={LottieAnimation} loop={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
