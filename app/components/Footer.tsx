import Link from "next/link";

// Assets from Figma
const logo =
  "https://www.figma.com/api/mcp/asset/cbc27f7a-5d46-4806-b521-3ab841c1e546";
const phoneIcon =
  "https://www.figma.com/api/mcp/asset/6597caff-3b20-4850-9af5-9c91a0c55555";
const emailIcon =
  "https://www.figma.com/api/mcp/asset/030b9df9-f9c9-4238-93ed-e9348956164d";

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
      <div className="bg-[#011719] px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-10">
        {/* Top Section - Logo & Social aligned with grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo - spans first column */}
          <div>
            <Link href="/">
              <img
                src={logo}
                alt="Aastha Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </Link>
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
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-full h-full object-contain"
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
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-white text-sm">{contactInfo.phone}</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="w-4 h-4 object-contain"
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

      {/* Copyright Bar */}
      <div className="bg-[#011719] border-t border-white/10 px-6 sm:px-10 py-4">
        <p className="text-white text-xs sm:text-sm text-center">
          <span className="mr-1">C</span>
          2025. All rights reserved. Developed by Aastha Design and Construction
          Co.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
