import Link from "next/link";
import Image from "next/image";

// Assets from Figma
const logo =
  "/assets/aastha-footer-logo.png";
const emailIcon =
  "/assets/gmail-icon.svg";
const whatsappIcon =
  "/assets/whatsapp-icon.svg";

// Social Media Icons
const socialIcons = [
  {
    id: 1,
    name: "Facebook",
    icon: "/assets/facebook-icon.svg",
    href: "https://www.facebook.com/AasthaDesignConstructionCo",
  },
  {
    id: 2,
    name: "Instagram",
    icon: "/assets/instagram-icon.svg",
    href: "https://www.instagram.com/aasthadesignconstructionco",
  },
  {
    id: 3,
    name: "YouTube",
    icon: "/assets/youtube-icon.svg",
    href: "https://www.youtube.com/@AasthaDesignConstructionCo",
  },
];

// Footer Links Data
const footerLinks = {
  company: {
    title: "Recent Projects",
    links: [
      { label: "Dreams Mansion", href: "/development/dhaka-dreams-mansion" },
      { label: "Anowarul Islam Sarder", href: "/construction/dhaka-anowarul-islam-sarder" },
      { label: "Brig Gen Md Mahbub Noor", href: "/construction/dhaka-brig-gen-md-mahbub-noor" },
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
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
};

// Contact Info
const contactInfo = {
  email: "info@aasthabd.com",
};

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-[#011719] px-6 sm:px-10 py-5 sm:py-6">
        <div className="container mx-auto">
          {/* Footer Grid - Logo/Address + Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Logo & Address Section - takes more space on larger screens */}
            <div className="md:col-span-4 lg:col-span-3">
              <img
                src={logo}
                alt="Aastha Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
              <p className="text-white/70 text-sm mt-4 leading-relaxed">
                Sector: 13, Road: 402, Plot: 002,<br />
                Jolshiri Abashon<br />
                (Near Jolshiri Central Park)
              </p>
            </div>

            {/* Links Grid - Company, Services, Help, Get In Touch */}
            <div className="md:col-span-8 lg:col-span-9">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
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
                          className="text-white/80 text-sm hover:text-[#00b4b4] transition-colors duration-300"
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
                          className="text-white/80 text-sm hover:text-[#00b4b4] transition-colors duration-300"
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
                          className="text-white/80 text-sm hover:text-[#00b4b4] transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get In Touch */}
                <div>
                  <h4 className="text-white text-base font-medium mb-4">GET IN TOUCH</h4>
                  <div className="flex flex-col gap-3">
                    {/* Email */}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={emailIcon}
                        alt="Email"
                        width={16}
                        height={16}
                        className="object-contain shrink-0"
                        loading="lazy"
                      />
                      <span className="text-white/80 text-sm">{contactInfo.email}</span>
                    </a>
                    {/* WhatsApp */}
                    <Link
                      href="https://wa.me/8801719680047"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
                    >
                      <Image
                        src={whatsappIcon}
                        alt="WhatsApp"
                        width={16}
                        height={16}
                        className="object-contain shrink-0"
                        loading="lazy"
                      />
                      <span className="text-white/80 text-sm">+8801719680047</span>
                    </Link>
                  </div>

                  {/* Follow Us - Social Media Icons */}
                  <div className="mt-4">
                    <h4 className="text-white text-sm font-medium mb-2">FOLLOW US</h4>
                    <div className="flex items-center gap-3">
                      {socialIcons.map((social) => (
                        <Link
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
                        >
                          <Image
                            src={social.icon}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
