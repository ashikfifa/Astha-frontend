"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Development", href: "/development" },
  { id: 3, label: "Construction", href: "/construction" },
  { id: 4, label: "Interior", href: "/interior" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine active link based on current pathname
  const getActiveLink = () => {
    if (pathname === "/") return "Home";
    const activeNav = navLinks.find(
      (link) => link.href !== "/" && pathname.startsWith(link.href)
    );
    return activeNav?.label || "Home";
  };

  const activeLink = getActiveLink();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6">
      <div className="container mx-auto flex item-start sm:item-start lg:items-center gap-8 sm:gap-10 lg:gap-30">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/webLogo.svg"
            alt="Aastha Logo"
            width={48}
            height={48}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain mt-2 sm:mt-3 md:mt-3 lg:mt-0"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden w-full lg:block">
          <div className="relative bg-[rgba(6,236,255,0.27)] rounded-[10px] px-3 py-1.5">
            <div className="flex items-center justify-between">
              {/* Menu Items */}
              <div className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`text-white hover:text-white/80 transition-all duration-200 px-3 py-1.5 rounded-[5px] ${
                      activeLink === link.label
                        ? "bg-[rgba(6,236,255,0.31)]"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Get In Touch Button */}
              <Link
                href="/contact"
                className="ml-6 bg-[#e01e26] hover:bg-[#c01820] text-white px-5 py-2 rounded-[20px] transition-colors duration-200 whitespace-nowrap"
              >
                Get In touch
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex-1 min-w-0">
          <div className="relative bg-[rgba(6,236,255,0.27)] rounded-[10px] px-2 sm:px-4 py-2 sm:py-3">
            <div className="flex items-center justify-between gap-2 sm:gap-3">
              {/* Active Link */}
              <Link
                href={navLinks.find((l) => l.label === activeLink)?.href || "/"}
                className="text-white flex-shrink min-w-0"
              >
                <span className="bg-[rgba(6,236,255,0.31)] px-2 sm:px-3 py-1 sm:py-1.5 rounded-[5px] text-xs sm:text-sm inline-block truncate">
                  {activeLink}
                </span>
              </Link>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {/* Get In Touch Button - Mobile */}
                <Link
                  href="/contact"
                  className="bg-[#e01e26] hover:bg-[#c01820] text-white px-2 sm:px-4 py-1 sm:py-1.5 rounded-[20px] transition-colors duration-200 text-xs sm:text-sm whitespace-nowrap"
                >
                  Get In touch
                </Link>

                {/* Hamburger Menu */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-1 flex-shrink-0"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="flex flex-col gap-2">
                  {navLinks
                    .filter((link) => link.label !== activeLink)
                    .map((link) => (
                      <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white hover:bg-white/10 px-3 py-2 rounded transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
