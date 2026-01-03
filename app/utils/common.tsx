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
