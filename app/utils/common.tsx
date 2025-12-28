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
      "If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade the site for its lack of helpful content for the reader. However, when you send sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs. focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs.",

    keyDetails: "Number of floors: 20, including two underground levels for parking.",
    projectPhotos: [
      { id: "dhaka-1", src: "/assets/development/dreams-mansion-gallery-1.jpeg", alt: "Dreams Mansion Gallery 1", type: "photos" },
      { id: "dhaka-2", src: "/assets/development/dreams-mansion-gallery-2.jpeg", alt: "Dreams Mansion Gallery 2", type: "photos" },
      { id: "dhaka-3", src: "/assets/development/dreams-mansion-gallery-3.jpeg", alt: "Dreams Mansion Gallery 3", type: "photos" },
      { id: "dhaka-4", src: "/assets/development/dreams-mansion-gallery-4.jpeg", alt: "Dreams Mansion Gallery 4", type: "photos" },
      { id: "dhaka-5", src: "/assets/development/dreams-mansion-gallery-5.jpeg", alt: "Dreams Mansion Gallery 5", type: "photos" },
      { id: "dhaka-6", src: "/assets/development/dreams-mansion-gallery-6.jpeg", alt: "Dreams Mansion Gallery 6", type: "photos" },
      { id: "dhaka-7", src: "/assets/development/dreams-mansion-gallery-7.jpeg", alt: "Dreams Mansion Gallery 7", type: "photos" },
      { id: "dhaka-8", src: "/assets/development/dreams-mansion-gallery-8.jpeg", alt: "Dreams Mansion Gallery 8", type: "photos" },
      { id: "dhaka-9", src: "/assets/development/dreams-mansion-gallery-9.jpeg", alt: "Dreams Mansion Gallery 9", type: "photos" },
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
  // {
  //   image: INTERIOR_IMAGES.dhaka,
  //   coverImage: INTERIOR_COVER_IMAGES.dhaka,
  //   location: "Dhaka",
  //   title: "Modern Living Room Design",
  //   projectDescription:
  //     "A stunning modern living room interior design featuring contemporary furniture, elegant lighting, and sophisticated color palettes. Our designers create spaces that reflect your personality while maximizing comfort and functionality. Every detail is carefully curated to achieve harmony and style.",
  //   keyDetails: "Area: 500 sq ft with custom furniture and automated lighting systems.",
  //   projectPhotos: [
  //     { id: "int-dhaka-1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Interior View 1", type: "photos" },
  //     { id: "int-dhaka-2", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhaka Interior View 2", type: "photos" },
  //     { id: "int-dhaka-3", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Dhaka Interior View 3", type: "photos" },
  //   ],
  //   projectVideos: [
  //     { id: "int-dhaka-v1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Interior Video 1", type: "video" },
  //   ],
  // },
  // {
  //   image: INTERIOR_IMAGES.khulna,
  //   coverImage: INTERIOR_COVER_IMAGES.khulna,
  //   location: "Khulna",
  //   title: "Luxury Bedroom Suite",
  //   projectDescription:
  //     "An exquisite luxury bedroom suite design featuring premium materials and serene aesthetics. The design focuses on creating a peaceful retreat with elegant furnishings and ambient lighting. Perfect for those who appreciate refined comfort and style.",
  //   keyDetails: "Master suite with walk-in closet and ensuite bathroom design.",
  //   projectPhotos: [
  //     { id: "int-khulna-1", src: "/assets/development/khulna-project.jpeg", alt: "Khulna Bedroom View 1", type: "photos" },
  //     { id: "int-khulna-2", src: "/assets/development/sylhet-project.jpeg", alt: "Khulna Bedroom View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.uttara,
  //   coverImage: INTERIOR_COVER_IMAGES.uttara,
  //   location: "Uttara",
  //   title: "Contemporary Kitchen Design",
  //   projectDescription:
  //     "A contemporary kitchen interior design featuring modern appliances, efficient storage solutions, and stylish finishes. The kitchen is designed for both functionality and aesthetics, making cooking a delightful experience. Premium materials ensure durability and easy maintenance.",
  //   keyDetails: "Modular kitchen with island counter and smart appliance integration.",
  //   projectPhotos: [
  //     { id: "int-uttara-1", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Kitchen View 1", type: "photos" },
  //     { id: "int-uttara-2", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Kitchen View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.mirpurDohs,
  //   coverImage: INTERIOR_COVER_IMAGES.mirpurDohs,
  //   location: "Mirpur DOHS",
  //   title: "Executive Office Interior",
  //   projectDescription:
  //     "A sophisticated executive office interior design featuring premium furniture and professional aesthetics. The design creates an environment that promotes productivity while reflecting corporate excellence. Custom solutions for meeting rooms and private offices included.",
  //   keyDetails: "Executive suite with conference room and reception area design.",
  //   projectPhotos: [
  //     { id: "int-mirpur-dohs-1", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur DOHS Office View 1", type: "photos" },
  //     { id: "int-mirpur-dohs-2", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur DOHS Office View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.dhanmondi,
  //   coverImage: INTERIOR_COVER_IMAGES.dhanmondi,
  //   location: "Dhanmondi",
  //   title: "Restaurant Interior Design",
  //   projectDescription:
  //     "An inviting restaurant interior design featuring unique ambiance and comfortable seating. The design creates a memorable dining experience through thoughtful lighting, textures, and spatial arrangements. Perfect for establishments seeking distinctive identity.",
  //   keyDetails: "150 seating capacity with bar area and private dining rooms.",
  //   projectPhotos: [
  //     { id: "int-dhanmondi-1", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhanmondi Restaurant View 1", type: "photos" },
  //     { id: "int-dhanmondi-2", src: "/assets/development/dhaka-project.jpeg", alt: "Dhanmondi Restaurant View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.cumilla,
  //   coverImage: INTERIOR_COVER_IMAGES.cumilla,
  //   location: "Cumilla",
  //   title: "Retail Store Design",
  //   projectDescription:
  //     "A captivating retail store interior design featuring attractive displays and customer-friendly layouts. The design maximizes product visibility while creating an enjoyable shopping experience. Custom fixtures and lighting solutions included.",
  //   keyDetails: "2,000 sq ft retail space with display systems and storage areas.",
  //   projectPhotos: [
  //     { id: "int-cumilla-1", src: "/assets/development/cumilla-project.jpeg", alt: "Cumilla Store View 1", type: "photos" },
  //     { id: "int-cumilla-2", src: "/assets/development/khulna-project.jpeg", alt: "Cumilla Store View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.sylhet,
  //   coverImage: INTERIOR_COVER_IMAGES.sylhet,
  //   location: "Sylhet",
  //   title: "Spa & Wellness Center",
  //   projectDescription:
  //     "A tranquil spa and wellness center interior design featuring calming aesthetics and functional treatment spaces. The design creates a sanctuary for relaxation with natural elements and soothing colors. Every space is designed to promote wellness and peace.",
  //   keyDetails: "Full spa facility with treatment rooms, sauna, and relaxation lounge.",
  //   projectPhotos: [
  //     { id: "int-sylhet-1", src: "/assets/development/sylhet-project.jpeg", alt: "Sylhet Spa View 1", type: "photos" },
  //     { id: "int-sylhet-2", src: "/assets/development/cumilla-project.jpeg", alt: "Sylhet Spa View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.uttara2,
  //   coverImage: INTERIOR_COVER_IMAGES.uttara2,
  //   location: "Uttara",
  //   title: "Penthouse Interior",
  //   projectDescription:
  //     "A luxurious penthouse interior design featuring panoramic views and premium finishes. The design maximizes the unique advantages of penthouse living with open floor plans and elegant furnishings. Custom solutions for every room ensure a cohesive luxury experience.",
  //   keyDetails: "3,500 sq ft penthouse with rooftop terrace and home theater.",
  //   projectPhotos: [
  //     { id: "int-uttara2-1", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Penthouse View 1", type: "photos" },
  //     { id: "int-uttara2-2", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Penthouse View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
  // {
  //   image: INTERIOR_IMAGES.mirpur1,
  //   coverImage: INTERIOR_COVER_IMAGES.mirpur1,
  //   location: "Mirpur 1",
  //   title: "Apartment Renovation",
  //   projectDescription:
  //     "A complete apartment renovation interior design transforming living spaces into modern, functional homes. The design updates every room with contemporary style while respecting the existing structure. Cost-effective solutions that deliver impressive results.",
  //   keyDetails: "Complete 1,200 sq ft apartment renovation with modern fixtures.",
  //   projectPhotos: [
  //     { id: "int-mirpur1-1", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur Apartment View 1", type: "photos" },
  //     { id: "int-mirpur1-2", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur Apartment View 2", type: "photos" },
  //   ],
  //   projectVideos: [],
  // },
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
