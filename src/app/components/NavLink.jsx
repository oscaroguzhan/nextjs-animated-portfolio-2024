import Link from "next/link";

import { usePathname } from "next/navigation";
const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-2 ${
        pathName === link.url && "bg-[#7979F7] text-white tracking-wide"
      }`}
      href={link.url}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
