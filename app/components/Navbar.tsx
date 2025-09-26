import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          AbelleGroup
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-blue-400">
            Portfolio
          </Link>
          <Link href="/projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link href="/credits" className="hover:text-blue-400">
            Credits
          </Link>
        </div>

        {/* Mobile Menu Placeholder (expand later if needed) */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

