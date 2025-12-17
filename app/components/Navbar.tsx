"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Development", href: "/development" },
  { id: 3, label: "Construction", href: "/construction" },
  { id: 4, label: "Interior", href: "/interior" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://www.figma.com/api/mcp/asset/cbc27f7a-5d46-4806-b521-3ab841c1e546"
            alt="Aastha Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#1a3a3d]/90 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeLink === link.label
                    ? "bg-[#00b4b4] text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Get In Touch Button */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 bg-[#e01e26] text-white text-sm font-medium rounded-full hover:bg-[#c41a21] transition-colors duration-300"
          >
            Get In touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-black/30 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#011719]/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setIsMenuOpen(false);
              }}
              className={`py-3 text-base font-medium text-white border-b border-white/10 transition-all duration-300 ${
                activeLink === link.label
                  ? "text-[#06ecff]"
                  : "hover:text-[#06ecff]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Get In Touch Button */}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-5 py-3 bg-[#e01e26] text-white text-base font-medium rounded-full text-center hover:bg-[#c41a21] transition-colors duration-300"
          >
            Get In touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;