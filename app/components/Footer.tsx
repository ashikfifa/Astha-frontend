import Link from "next/link";

// Assets from Figma
const logo = "https://www.figma.com/api/mcp/asset/cbc27f7a-5d46-4806-b521-3ab841c1e546";
const phoneIcon = "https://www.figma.com/api/mcp/asset/6597caff-3b20-4850-9af5-9c91a0c55555";
const emailIcon = "https://www.figma.com/api/mcp/asset/030b9df9-f9c9-4238-93ed-e9348956164d";
const copyrightIcon = "https://www.figma.com/api/mcp/asset/204a95c4-cc28-44ea-8130-fa306d014c5b";

// Social Media Icons
const socialIcons = [
  {
    id: 1,
    name: "Facebook",
    icon: "https://www.figma.com/api/mcp/asset/5b5b8453-4664-49ee-877f-3f709a73c5cc",
    href: "https://facebook.com",
  },
  {
    id: 2,
    name: "Instagram",
    icon: "https://www.figma.com/api/mcp/asset/499cd909-1b18-4566-ab52-6aae8c48dd24",
    href: "https://instagram.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: "https://www.figma.com/api/mcp/asset/cfd57e4a-162b-416e-beed-6d6fdf536a83",
    href: "https://linkedin.com",
  },
  {
    id: 4,
    name: "YouTube",
    icon: "https://www.figma.com/api/mcp/asset/b1930a9d-6dab-4513-be73-2582cf1cfdfe",
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
      <div className="bg-[#011719] px-4 sm:px-6 lg:px-10 py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {/* Logo & Contact Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/">
                <img
                  src={logo}
                  alt="Aastha Logo"
                  className="h-12 sm:h-14 w-auto object-contain mb-6"
                />
              </Link>

              {/* Get In Touch */}
              <div>
                <h4 className="text-white text-xs font-normal mb-4">
                  GET IN TOUCH
                </h4>
                <div className="flex flex-col gap-3">
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <img
                      src={phoneIcon}
                      alt="Phone"
                      className="w-[10px] h-[10px] object-contain"
                    />
                    <span className="text-white text-[10px] sm:text-xs">
                      {contactInfo.phone}
                    </span>
                  </div>
                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <img
                      src={emailIcon}
                      alt="Email"
                      className="w-[10px] h-[10px] object-contain"
                    />
                    <span className="text-white text-[10px] sm:text-xs">
                      {contactInfo.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - Mobile & Tablet */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-xs font-normal mb-4">FOLLOW US</h4>
              <div className="flex items-center gap-3">
                {socialIcons.map((social) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity duration-300"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-xs font-normal mb-4">
                {footerLinks.company.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.company.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white text-[10px] sm:text-xs hover:text-[#06ecff] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-xs font-normal mb-4">
                {footerLinks.services.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.services.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white text-[10px] sm:text-xs hover:text-[#06ecff] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-xs font-normal mb-4">
                {footerLinks.help.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.help.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white text-[10px] sm:text-xs hover:text-[#06ecff] transition-colors duration-300"
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
      <div className="bg-[#121212] px-4 sm:px-6 py-2 sm:py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <img
            src={copyrightIcon}
            alt="Copyright"
            className="w-[10px] h-[10px] object-contain"
          />
          <p className="text-white text-[8px] sm:text-[10px] text-center">
            2025. All rights reserved. Developed by Aastha Design and Construction Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;