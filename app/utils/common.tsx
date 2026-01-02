import { ProjectCardProps } from "./type";

export const projectsData = [
  {
    id: 1,
    image: "/assets/development/uttara2-project.jpeg",
    location: "Dhaka",
    title: "Dreams Mention",
  },
  {
    id: 2,
    image: "/assets/construction/project1/IMG-20251215-WA0160.jpg",
    location: "Dhaka",
    title: "Anowarul Islam Sarder",
  },
  {
    id: 3,
    image: "/assets/construction/project2/IMG-20251211-WA0075.jpg",
    location: "Dhaka",
    title: "Brig. Gen Md. Mahbub Noor",
  }
];

const PROJECT_IMAGES = {
  dhaka: "/assets/development/thumbnail-of-dreams-mansion.jpg",
};

const PROJECT_COVER_IMAGES = {
  dhaka: "/assets/development/cover-image-of-dreams-mansion.jpg",
};

export const DEFAULT_PROJECTS: ProjectCardProps[] = [
  {
    image: PROJECT_IMAGES.dhaka,
    coverImage: PROJECT_COVER_IMAGES.dhaka,
    location: "Dhaka",
    title: "Dreams Mansion",
    projectDescription:
      "If everyone used sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum\. Nevertheless, words and paragraphs.",

    keyDetails: "Number of floors: 20, including two underground levels for parking.",
    projectPhotos: [
      { id: "dhaka-1", src: "/assets/development/dreams-mansion/1.jpg", alt: "Dreams Mansion Gallery 1", type: "photos" },
      { id: "dhaka-2", src: "/assets/development/dreams-mansion/2.jpg", alt: "Dreams Mansion Gallery 2", type: "photos" },
      { id: "dhaka-3", src: "/assets/development/dreams-mansion/3.jpg", alt: "Dreams Mansion Gallery 3", type: "photos" },
      { id: "dhaka-4", src: "/assets/development/dreams-mansion/4.jpg", alt: "Dreams Mansion Gallery 4", type: "photos" },
      { id: "dhaka-5", src: "/assets/development/dreams-mansion/5.jpg", alt: "Dreams Mansion Gallery 5", type: "photos" },
      { id: "dhaka-6", src: "/assets/development/dreams-mansion/6.jpg", alt: "Dreams Mansion Gallery 6", type: "photos" },
      { id: "dhaka-7", src: "/assets/development/dreams-mansion/7.jpg", alt: "Dreams Mansion Gallery 7", type: "photos" },
      { id: "dhaka-8", src: "/assets/development/dreams-mansion/8.jpg", alt: "Dreams Mansion Gallery 8", type: "photos" },
      { id: "dhaka-9", src: "/assets/development/dreams-mansion/9.jpg", alt: "Dreams Mansion Gallery 9", type: "photos" },
      { id: "dhaka-10", src: "/assets/development/dreams-mansion/10.jpg", alt: "Dreams Mansion Gallery 10", type: "photos" },
      { id: "dhaka-11", src: "/assets/development/dreams-mansion/11.jpg", alt: "Dreams Mansion Gallery 11", type: "photos" },
      { id: "dhaka-12", src: "/assets/development/dreams-mansion/12.jpg", alt: "Dreams Mansion Gallery 12", type: "photos" },
      { id: "dhaka-13", src: "/assets/development/dreams-mansion/13.jpg", alt: "Dreams Mansion Gallery 13", type: "photos" },
    ],
    projectVideos: [
      { id: "dhaka-v1", src: "/assets/youtube-thumbnail-1.jpg", alt: "Dreams Mansion Video 1", type: "video", videoUrl: "https://www.youtube.com/shorts/WmfUjElgom4" },
      { id: "dhaka-v2", src: "/assets/youtube-thumbnail-2.jpg", alt: "Dreams Mansion Video 2", type: "video", videoUrl: "https://www.youtube.com/shorts/bQpIh1M3V1I" }
    ],
  }
];

// Construction Projects (using same structure as development)
const CONSTRUCTION_IMAGES = {
  dhaka: "/assets/construction/project1/IMG-20251215-WA0174.jpg",
  khulna: "/assets/construction/project2/IMG-20251211-WA0075.jpg",
  uttara: "/assets/development/uttara-project.jpeg",
  mirpurDohs: "/assets/development/mirpur-dohs-project.jpeg",
  dhanmondi: "/assets/development/dhanmondi-project.jpeg",
  cumilla: "/assets/development/cumilla-project.jpeg",
  sylhet: "/assets/development/sylhet-project.jpeg",
  uttara2: "/assets/development/uttara2-project.jpeg",
  mirpur1: "/assets/development/mirpur1-project.jpeg",
};

const CONSTRUCTION_COVER_IMAGES = {
  dhaka: "/assets/construction/project1/IMG-20251215-WA0174.jpg",
  khulna: "/assets/construction/project2/IMG-20251211-WA0077.jpg",
  uttara: "/assets/development/uttara-project.jpeg",
  mirpurDohs: "/assets/development/mirpur-dohs-project.jpeg",
  dhanmondi: "/assets/development/dhanmondi-project.jpeg",
  cumilla: "/assets/development/cumilla-project.jpeg",
  sylhet: "/assets/development/sylhet-project.jpeg",
  uttara2: "/assets/development/uttara2-project.jpeg",
  mirpur1: "/assets/development/mirpur1-project.jpeg",
};

export const CONSTRUCTION_PROJECTS: ProjectCardProps[] = [
  {
    image: CONSTRUCTION_IMAGES.dhaka,
    coverImage: CONSTRUCTION_COVER_IMAGES.dhaka,
    location: "Dhaka",
    title: "Anowarul Islam Sarder",
    projectDescription:
      "A state-of-the-art commercial building construction project in the heart of Dhaka. Our team delivers exceptional quality with attention to structural integrity and modern design standards. This project showcases our expertise in large-scale commercial construction with sustainable building practices.",
    keyDetails: "Number of floors: 20, including two underground levels for parking.",
    brochurePath: "/assets/file/DREAMS MANSION BROCHURE_AASTHA 06.03.2024.pdf",
    projectPhotos: [
      { id: "const-dhaka-1", src: "/assets/construction/project1/IMG-20251215-WA0160.jpg", alt: "Dhaka Construction View 1", type: "photos" },
      { id: "const-dhaka-2", src: "/assets/construction/project1/IMG-20251215-WA0161.jpg", alt: "Dhaka Construction View 2", type: "photos" },
      { id: "const-dhaka-3", src: "/assets/construction/project1/IMG-20251215-WA0162.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-4", src: "/assets/construction/project1/IMG-20251215-WA0163.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-5", src: "/assets/construction/project1/IMG-20251215-WA0164.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-6", src: "/assets/construction/project1/IMG-20251215-WA0165.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-7", src: "/assets/construction/project1/IMG-20251215-WA0166.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-8", src: "/assets/construction/project1/IMG-20251215-WA0167.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-9", src: "/assets/construction/project1/IMG-20251215-WA0168.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-10", src: "/assets/construction/project1/IMG-20251215-WA0169.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-11", src: "/assets/construction/project1/IMG-20251215-WA0170.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-12", src: "/assets/construction/project1/IMG-20251215-WA0171.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-13", src: "/assets/construction/project1/IMG-20251215-WA0172.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-14", src: "/assets/construction/project1/IMG-20251215-WA0173.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-15", src: "/assets/construction/project1/IMG-20251215-WA0174.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-16", src: "/assets/construction/project1/IMG-20251215-WA0175.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-17", src: "/assets/construction/project1/IMG-20251215-WA0176.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-18", src: "/assets/construction/project1/IMG-20251215-WA0177.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-19", src: "/assets/construction/project1/IMG-20251215-WA0178.jpg", alt: "Dhaka Construction View 3", type: "photos" },
      { id: "const-dhaka-20", src: "/assets/construction/project1/IMG-20251215-WA0179.jpg", alt: "Dhaka Construction View 3", type: "photos" },
    ],
    projectVideos: [

    ],
  },
  {
    image: CONSTRUCTION_IMAGES.khulna,
    coverImage: CONSTRUCTION_COVER_IMAGES.khulna,
    location: "Dhaka",
    title: "Brig. Gen Md. Mahbub Noor",
    projectDescription:
      "A premium residential complex construction featuring modern amenities and sustainable design. This project incorporates the latest construction technologies to ensure durability and comfort. Perfect for families seeking quality living spaces.",
    keyDetails: "Number of floors: 15, with dedicated recreational facilities and green spaces.",
    projectPhotos: [
      { id: "const-khulna-1", src: "/assets/construction/project2/IMG-20251211-WA0075.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-2", src: "/assets/construction/project2/IMG-20251211-WA0076.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-3", src: "/assets/construction/project2/IMG-20251211-WA0077.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-4", src: "/assets/construction/project2/IMG-20251211-WA0078.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-5", src: "/assets/construction/project2/IMG-20251211-WA0079.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-6", src: "/assets/construction/project2/IMG-20251211-WA0080.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-7", src: "/assets/construction/project2/IMG-20251211-WA0081.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-8", src: "/assets/construction/project2/IMG-20251211-WA0082.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-9", src: "/assets/construction/project2/IMG-20251211-WA0083.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-10", src: "/assets/construction/project2/IMG-20251211-WA0084.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-11", src: "/assets/construction/project2/IMG-20251211-WA0085.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-12", src: "/assets/construction/project2/IMG-20251211-WA0086.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-13", src: "/assets/construction/project2/IMG-20251211-WA0087.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-14", src: "/assets/construction/project2/IMG-20251211-WA0088.jpg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-15", src: "/assets/construction/project2/IMG-20251211-WA0089.jpg", alt: "Khulna Construction View 1", type: "photos" },
    ],
    projectVideos: [],
  }
];

// Interior Projects (using same structure as development)
const INTERIOR_IMAGES = {
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

const INTERIOR_COVER_IMAGES = {
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

export const INTERIOR_PROJECTS: ProjectCardProps[] = [
  {
    image: INTERIOR_IMAGES.dhaka,
    coverImage: INTERIOR_COVER_IMAGES.dhaka,
    location: "Dhaka",
    title: "Sample Interior",
    projectDescription:
      "A sample interior project demonstrating the slug page and static export. Replace with real interior projects as needed.",
    keyDetails: "Area: 500 sq ft, custom fixtures, LED lighting.",
    projectPhotos: [
      { id: "int-dhaka-1", src: "/assets/development/dhaka-project.jpeg", alt: "Interior View 1", type: "photos" },
      { id: "int-dhaka-2", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Interior View 2", type: "photos" },
    ],
    projectVideos: [],
  },
];

const SERVICE_IMAGES = {
  development: "/assets/development/uttara2-project.jpeg",
  construction: "/assets/construction/project1/IMG-20251215-WA0174.jpg",
  interior: "/assets/interior-design.jpeg",
};

export const DEFAULT_SERVICES = [
  {
    image: SERVICE_IMAGES.construction,
    title: "Construction",
    href: "/construction",
  },
  {
    image: SERVICE_IMAGES.interior,
    title: "Interior",
    href: "/interior",
  },
];

export const CONSTRUCTION_SERVICES = [
    {
        image: SERVICE_IMAGES.development,
        title: "Development",
        href: "/development",
    },
    {
        image: SERVICE_IMAGES.interior,
        title: "Interior",
        href: "/interior",
    },
];

export const INTERIOR_SERVICES = [
    {
        image: SERVICE_IMAGES.development,
        title: "Development",
        href: "/development",
    },
    {
        image: SERVICE_IMAGES.construction,
        title: "Construction",
        href: "/construction",
    }
];
