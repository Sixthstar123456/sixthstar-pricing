"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbars = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-dependent styles
  const navPosition = isScrolled
    ? "fixed bottom-4 left-1/2 transform -translate-x-1/2"
    : "fixed top-4 left-1/2 transform -translate-x-1/2";

  const navBgClass = isScrolled
    ? "bg-blue-600 w-auto px-4 py-2 rounded-full"
    : "bg-transparent w-[90%] max-w-7xl px-6 py-4 rounded-full";

  const layoutClass = isScrolled
    ? "justify-center space-x-10"
    : "justify-between";

  const linkTextClass = isScrolled
    ? "text-white dark:text-gray-200"
    : "text-black dark:text-gray-700";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`z-50  transition-all duration-300 ${navPosition} ${navBgClass} flex items-center  ${layoutClass}`}
      >
        {/* Logo (shown only when not scrolled) */}
        {!isScrolled && (
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750310544/Untitled_180_x_60_px_230_x_60_px_400_x_300_px_1_akoesj.png"
              width={150}
              height={200}
              alt="Logo"
              className="dark:hidden"
            />
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 ">
          <NavLink href="/cloud-hosting" scrollClass={linkTextClass}>
            Cloud Hosting
          </NavLink>
          <NavLink href="/spamfilter" scrollClass={linkTextClass}>
            Spam Filter
          </NavLink>
          <NavLink href="/Ssl-Certificate" scrollClass={linkTextClass}>
            SSl Certificate
          </NavLink>
          <NavLink
            href="/carbonio" scrollClass={linkTextClass}>
          
            Carbonio
          </NavLink>
          {/* <NavLink
            href="/cloud-linux-server" scrollClass={linkTextClass}>
          
           Cloud Linux Server
          </NavLink> */}
        </div>

        {/* Contact Button (Desktop, only when not scrolled) */}
        {!isScrolled && (
          <Link
            href="/Contact-us"
            className="hidden md:inline-block px-5 py-3 text-base font-medium rounded-full bg-white hover:bg-gray-100 text-black transition-colors"
          >
            Contact us
          </Link>
        )}

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden focus:outline-none ${linkTextClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed inset-x-1 ${
            isScrolled ? "bottom-20" : "top-[90px]"
          } w-[98%] h-max p-6 rounded-xl border border-white/10 shadow-lg z-50 bg-white dark:bg-gray-900/30 transition-transform duration-300`}
        >
          <div className="flex flex-col space-y-6 text-lg">
            <NavLink href="/cloud-hosting" onClick={() => setIsOpen(false)}>
              Cloud Hosting
            </NavLink>
            <NavLink href="/spamfilter" onClick={() => setIsOpen(false)}>
              Spam Filter
            </NavLink>
            <NavLink href="/Ssl-Certificate" onClick={() => setIsOpen(false)}>
              SSL Certificate
            </NavLink>
            <NavLink href="/carbonio" onClick={() => setIsOpen(false)}>
            carbonio
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

// Link Component
const NavLink = ({
  href,
  children,
  onClick,
  external = false,
  scrollClass = "",
}) => {
  const baseClasses = `relative text-base font-semibold transition duration-200 hover:opacity-80 ${scrollClass}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={baseClasses}>
      {children}
    </Link>
  );
};

export default Navbars;
