"use client";
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

  return (
    <div className="relative flex items-center justify-between h-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-48">
      {/* logo */}
      <div className="w-1/3 md:hidden">
        <Link href="https:/codeguruozzy.com" />
        <Image
          src="/ozzylogo.png"
          alt="logo"
          width={120}
          height={48}
          className="rounded-md"
        />
      </div>
      <div className="hidden w-1/3 gap-4 md:flex md:text-white md:uppercase">
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
      </div>
      <div className="hidden w-1/3 md:gap-4 md:items-center md:flex md:justify-end ">
        <Link href="">
          <Image src="/github.png" alt="" width={36} height={36} />
        </Link>
        <Link href="">
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
        className="z-30 flex flex-col w-10 h-8 gap-2 cursor-pointer md:hidden "
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="w-10 h-1 bg-white rounded"></div>
        <div className="w-10 h-1 bg-white rounded"></div>
        <div className="w-10 h-1 bg-white rounded"></div>
      </button>
      {/* menu list */}
      {openMenu && (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-8 text-3xl text-white md:hidden">
          {links.map((link) => (
            <Link key={link.name} href={link.url} 
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
      {/* social icons  */}
    </div>
  );
};

export default Navbar;
