import Link from "next/link";
import Image from "next/image";

// Assets from Figma
const logo =
  "/assets/aastha-footer-logo.png";
const phoneIcon =
  "/assets/phone-icon.svg";
const emailIcon =
  "/assets/gmail-icon.svg";

// Social Media Icons
const socialIcons = [
  {
    id: 1,
    name: "Facebook",
    icon: "/assets/facebook-icon.svg",
    href: "https://facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: "/assets/instagram-icon.svg",
    href: "https://instagram.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: "/assets/linkedin-icon.svg",
    href: "https://linkedin.com",
  },
  {
    id: 4,
    name: "YouTube",
    icon: "/assets/youtube-icon.svg",
    href: "https://youtube.com",
  },
];

// Footer Links Data
const footerLinks = {
  company: {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why choose us", href: "/why-us" },
      { label: "Meet our team", href: "/team" },
    ],
  },
  services: {
    title: "SERVICES",
    links: [
      { label: "Real estate development", href: "/development" },
      { label: "Construction", href: "/construction" },
      { label: "Interior", href: "/interior" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Condition", href: "/terms" },
    ],
  },
};

// Contact Info
const contactInfo = {
  phone: "(+880) 01717227733",
  email: "aastha@gmail.com",
};

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#011719] px-6 sm:px-10 py-8 sm:py-10">
        <div className="container mx-auto">
          {/* Top Section - Logo & Social aligned with grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo - spans first column */}
          <div>
            <img
              src={logo}
              alt="Aastha Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </div>

          {/* Social Media - aligned with COMPANY column */}
          <div>
            <h4 className="text-white text-base font-medium mb-3">FOLLOW US</h4>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Empty columns to maintain grid alignment */}
          <div className="hidden sm:block"></div>
          <div className="hidden sm:block"></div>
        </div>

          {/* Bottom Section - Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {/* Get In Touch */}
          <div>
            <h4 className="text-white text-base font-medium mb-4">GET IN TOUCH</h4>
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Image
                  src={phoneIcon}
                  alt="Phone"
                  width={16}
                  height={16}
                  className="object-contain"
                  loading="lazy"
                />
                <span className="text-white text-sm">{contactInfo.phone}</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <Image
                  src={emailIcon}
                  alt="Email"
                  width={16}
                  height={16}
                  className="object-contain"
                  loading="lazy"
                />
                <span className="text-white text-sm">{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-base font-medium mb-4">
              {footerLinks.company.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-[#00b4b4] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white text-base font-medium mb-4">
              {footerLinks.services.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-[#00b4b4] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-white text-base font-medium mb-4">
              {footerLinks.help.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.help.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white text-sm hover:text-[#00b4b4] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#121212] border-t border-white/10 px-6 sm:px-10 py-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-white text-xs sm:text-sm">
          <Image src="/assets/copy-right-icon.svg" alt="Copyright" width={16} height={16} loading="lazy" />
          <span>2025. All rights reserved. Developed by Aastha Design and Construction Co.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
