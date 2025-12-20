import { ProjectCardProps } from "./type";

export const projectsData = [
  {
    id: 1,
    image: "/assets/mixed-use-development.jpeg",
    location: "Dhaka",
    title: "Mixed Use Development",
  },
  {
    id: 2,
    image: "/assets/greenview-apartments.jpeg",
    location: "Sylhet",
    title: "Greenview Apartments",
  },
  {
    id: 3,
    image: "/assets/premier-office-tower.jpeg",
    location: "Khulna",
    title: "Premier Office Tower",
  },
  {
    id: 4,
    image: "/assets/urban-heights-residence.jpeg",
    location: "Chittagong",
    title: "Urban Heights Residence",
  },
];

const PROJECT_IMAGES = {
  dhaka: "/assets/development/dhaka-project.jpeg",
  khulna: "/assets/development/khulna-project.jpeg",
  uttara: "/assets/development/uttara-project.jpeg",
  mirpurDohs: "/assets/development/mirpur-dohs-project.jpeg",
  dhanmondi: "/assets/development/dhanmondi-project.jpeg",
  cumilla: "/assets/development/cumilla-project.jpeg",
  sylhet: "/assets/development/sylhet-project.jpeg",
  uttara2: "/assets/development/uttara2-project.jpeg",
  mirpur1: "/assets/development/mirpur1-project.jpeg",
};

export const DEFAULT_PROJECTS: ProjectCardProps[] = [
  {
    image: PROJECT_IMAGES.dhaka,
    location: "Dhaka",
    title: "Mixed Use Development",
    projectDescription:
      "If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade the site for its lack of helpful content for the reader. However, when you send sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs. focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs.",

    keyDetails: "Number of floors: 20, including two underground levels for parking.",
    projectPhotos: [
      { id: "dhaka-1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Project View 1", type: "photos" },
      { id: "dhaka-2", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhaka Project View 2", type: "photos" },
      { id: "dhaka-3", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Dhaka Project View 3", type: "photos" },
    ],
    projectVideos: [
      { id: "dhaka-v1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Project Video 1", type: "video" },
    ],
  },
  {
    image: PROJECT_IMAGES.khulna,
    location: "Khulna",
    title: "Lake View Project",
    projectDescription:
      "A stunning lakefront development offering panoramic views and modern amenities. This project combines residential comfort with natural beauty, featuring spacious apartments designed for contemporary living. The architecture seamlessly blends with the surrounding environment while providing all modern conveniences.",
    keyDetails: "Number of floors: 15, with dedicated lakefront amenities and recreational spaces.",
    projectPhotos: [
      { id: "khulna-1", src: "/assets/development/khulna-project.jpeg", alt: "Khulna Project View 1", type: "photos" },
      { id: "khulna-2", src: "/assets/development/sylhet-project.jpeg", alt: "Khulna Project View 2", type: "photos" },
      { id: "khulna-1", src: "/assets/development/khulna-project.jpeg", alt: "Khulna Project View 1", type: "photos" },
      { id: "khulna-2", src: "/assets/development/sylhet-project.jpeg", alt: "Khulna Project View 2", type: "photos" },
      { id: "khulna-1", src: "/assets/development/khulna-project.jpeg", alt: "Khulna Project View 1", type: "photos" },
      { id: "khulna-2", src: "/assets/development/sylhet-project.jpeg", alt: "Khulna Project View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.uttara,
    location: "Uttara",
    title: "Mixed Use Development",
    projectDescription:
      "A premier mixed-use development in the heart of Uttara, combining retail, office, and residential spaces. This project is designed to create a vibrant community hub with modern architecture and sustainable features. The development offers convenient access to major transportation links.",
    keyDetails: "Number of floors: 18, featuring ground floor retail and upper residential units.",
    projectPhotos: [
      { id: "uttara-1", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Project View 1", type: "photos" },
      { id: "uttara-2", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Project View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.mirpurDohs,
    location: "Mirpur DOHS",
    title: "Mixed Use Development",
    projectDescription:
      "An exclusive development in the prestigious Mirpur DOHS area, offering luxury living with premium amenities. The project features state-of-the-art facilities, including a fitness center, rooftop garden, and 24/7 security. Designed for discerning residents who value quality and comfort.",
    keyDetails: "Number of floors: 12, with premium finishes and dedicated parking for each unit.",
    projectPhotos: [
      { id: "mirpur-dohs-1", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur DOHS View 1", type: "photos" },
      { id: "mirpur-dohs-2", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur DOHS View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.dhanmondi,
    location: "Dhanmondi",
    title: "Mixed Use Development",
    projectDescription:
      "Located in the iconic Dhanmondi area, this development offers a perfect blend of tradition and modernity. The project features contemporary design while respecting the neighborhood's heritage. Residents enjoy proximity to lakes, parks, and cultural landmarks.",
    keyDetails: "Number of floors: 10, with spacious units and dedicated community spaces.",
    projectPhotos: [
      { id: "dhanmondi-1", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhanmondi View 1", type: "photos" },
      { id: "dhanmondi-2", src: "/assets/development/dhaka-project.jpeg", alt: "Dhanmondi View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.cumilla,
    location: "Cumilla",
    title: "Mixed Use Development",
    projectDescription:
      "A landmark development bringing modern urban living to Cumilla. This project combines commercial and residential spaces to create a self-sustained community. The design incorporates local architectural elements with contemporary amenities.",
    keyDetails: "Number of floors: 8, featuring commercial spaces on lower floors and residential above.",
    projectPhotos: [
      { id: "cumilla-1", src: "/assets/development/cumilla-project.jpeg", alt: "Cumilla View 1", type: "photos" },
      { id: "cumilla-2", src: "/assets/development/khulna-project.jpeg", alt: "Cumilla View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.sylhet,
    location: "Sylhet",
    title: "Mixed Use Development",
    projectDescription:
      "Nestled in the scenic city of Sylhet, this development offers breathtaking views and premium living spaces. The project is designed to complement the natural beauty of the region while providing modern urban conveniences. Perfect for those seeking tranquility without compromising on amenities.",
    keyDetails: "Number of floors: 14, with panoramic mountain views from upper floors.",
    projectPhotos: [
      { id: "sylhet-1", src: "/assets/development/sylhet-project.jpeg", alt: "Sylhet View 1", type: "photos" },
      { id: "sylhet-2", src: "/assets/development/cumilla-project.jpeg", alt: "Sylhet View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.uttara2,
    location: "Uttara",
    title: "Mixed Use Development",
    projectDescription:
      "The second phase of our successful Uttara development, featuring enhanced amenities and modern design. This project builds on the success of the original while introducing new features and improved layouts. Ideal for families and professionals alike.",
    keyDetails: "Number of floors: 16, with enhanced green spaces and community facilities.",
    projectPhotos: [
      { id: "uttara2-1", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Phase 2 View 1", type: "photos" },
      { id: "uttara2-2", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Phase 2 View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: PROJECT_IMAGES.mirpur1,
    location: "Mirpur 1",
    title: "Mixed Use Development",
    projectDescription:
      "A thoughtfully designed development in Mirpur 1, offering affordable luxury for modern families. The project features efficient layouts, quality construction, and essential amenities. Excellent connectivity to major roads and public transportation.",
    keyDetails: "Number of floors: 10, with dedicated children's play area and community hall.",
    projectPhotos: [
      { id: "mirpur1-1", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur 1 View 1", type: "photos" },
      { id: "mirpur1-2", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur 1 View 2", type: "photos" },
    ],
    projectVideos: [],
  },
];

const SERVICE_IMAGES = {
  construction: "/assets/construction.jpeg",
  interior: "/assets/interior-design.jpeg",
};

export const DEFAULT_SERVICES = [
  {
    image: SERVICE_IMAGES.construction,
    title: "Construction",
    href: "/services/construction",
  },
  {
    image: SERVICE_IMAGES.interior,
    title: "Interior",
    href: "/services/interior",
  },
];
