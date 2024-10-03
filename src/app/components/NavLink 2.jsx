"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const path = usePathname();

  return (
    <Link
      href={link.url}
      className={`p-2 rounded tracking-wide ${path === link.url && "bg-[#7979F7] text-white"} `}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
