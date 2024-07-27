"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import NavLink from "./NavLink";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Contact", url: "/contact" },
];
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // variants for framer-motion animations
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const menuItems = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="relative flex items-center justify-between h-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-48">
      {/* logo */}
      <div className="w-1/3 md:hidden">
        <Link href="https:/codeguruozzy.com">
          <Image
            src="/ozzylogo.png"
            alt="logo"
            width={120}
            height={48}
            
            className="rounded-md"
          />
        </Link>
      </div>
      <div className="hidden w-1/3 gap-4 md:flex md:text-white md:uppercase">
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
      </div>
      <div className="hidden w-1/3 md:gap-4 md:items-center md:flex md:justify-end ">
        <Link href="https://github.com/oscaroguzhan">
          <Image src="/github.png" alt="" width={36} height={36} />
        </Link>
        <Link href="https://www.linkedin.com/in/oscar-wihlborg-erg%C3%BCn/">
          <Image src="/linkedin.png" alt="" width={36} height={36} />
        </Link>
        <Link href="">
          <Image src="/facebook.png" alt="" width={36} height={36} />
        </Link>
        <Link href="">
          <Image src="/instagram.png" alt="" width={36} height={36} />
        </Link>
      </div>
      {/* hamburger menu */}
      <button
        className="relative z-50 flex flex-col w-10 h-8 gap-2 cursor-pointer md:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <motion.div
          variants={topVariants}
          animate={openMenu ? "opened" : "closed"}
          className="w-8 h-1 origin-left bg-white rounded"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={openMenu ? "opened" : "closed"}
          className="w-8 h-1 bg-white rounded"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={openMenu ? "opened" : "closed"}
          className="w-8 h-1 origin-left bg-white rounded"
        ></motion.div>
      </button>
      {/* menu list */}
      {openMenu && (
        <motion.div
          variants={menuItems}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 bg-[#141925]"
        >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              className="cursor-pointer"
              key={link.name}
            >
              <Link href={link.url}>{link.name}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
