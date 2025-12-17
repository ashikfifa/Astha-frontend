"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Development", href: "/development" },
  { label: "Construction", href: "/construction" },
  { label: "Interior", href: "/interior" },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const logoUrl =
    "https://www.figma.com/api/mcp/asset/d26a771b-9638-4016-a59f-6c2129d7745e";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="relative w-[70px] h-[35px] md:w-[79px] md:h-[40px]">
            <Image
              src={logoUrl}
              alt="Aastha Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
            {/* Navigation Items */}
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={`relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md
                      ${
                        activeItem === item.label
                          ? "bg-cyan-400/30"
                          : "hover:bg-white/10"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Get In Touch Button */}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-[#e01e26] hover:bg-[#c41a21] text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-10 p-2 text-white"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#011719]/95 backdrop-blur-lg transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                  className={`transform transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-medium transition-colors duration-300 ${
                      activeItem === item.label
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${navItems.length * 100}ms`
                    : "0ms",
                }}
                className={`transform transition-all duration-500 mt-4 ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-3 bg-[#e01e26] hover:bg-[#c41a21] text-white text-lg font-medium rounded-full transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;