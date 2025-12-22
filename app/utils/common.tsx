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
      { id: "dhaka-1", src: "/assets/development/cover-image-of-dreams-mansion.jpg", alt: "Dhaka Project View 1", type: "photos" },
      { id: "dhaka-2", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhaka Project View 2", type: "photos" },
      { id: "dhaka-3", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Dhaka Project View 3", type: "photos" },
    ],
    projectVideos: [
      { id: "dhaka-v1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Project Video 1", type: "video" },
    ],
  }
];

// Construction Projects (using same structure as development)
const CONSTRUCTION_IMAGES = {
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

const CONSTRUCTION_COVER_IMAGES = {
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

export const CONSTRUCTION_PROJECTS: ProjectCardProps[] = [
  {
    image: CONSTRUCTION_IMAGES.dhaka,
    coverImage: CONSTRUCTION_COVER_IMAGES.dhaka,
    location: "Dhaka",
    title: "Commercial Building Construction",
    projectDescription:
      "A state-of-the-art commercial building construction project in the heart of Dhaka. Our team delivers exceptional quality with attention to structural integrity and modern design standards. This project showcases our expertise in large-scale commercial construction with sustainable building practices.",
    keyDetails: "Number of floors: 20, including two underground levels for parking.",
    projectPhotos: [
      { id: "const-dhaka-1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Construction View 1", type: "photos" },
      { id: "const-dhaka-2", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhaka Construction View 2", type: "photos" },
      { id: "const-dhaka-3", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Dhaka Construction View 3", type: "photos" },
    ],
    projectVideos: [
      { id: "const-dhaka-v1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Construction Video 1", type: "video" },
    ],
  },
  {
    image: CONSTRUCTION_IMAGES.khulna,
    coverImage: CONSTRUCTION_COVER_IMAGES.khulna,
    location: "Khulna",
    title: "Residential Complex",
    projectDescription:
      "A premium residential complex construction featuring modern amenities and sustainable design. This project incorporates the latest construction technologies to ensure durability and comfort. Perfect for families seeking quality living spaces.",
    keyDetails: "Number of floors: 15, with dedicated recreational facilities and green spaces.",
    projectPhotos: [
      { id: "const-khulna-1", src: "/assets/development/khulna-project.jpeg", alt: "Khulna Construction View 1", type: "photos" },
      { id: "const-khulna-2", src: "/assets/development/sylhet-project.jpeg", alt: "Khulna Construction View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.uttara,
    coverImage: CONSTRUCTION_COVER_IMAGES.uttara,
    location: "Uttara",
    title: "Shopping Mall Construction",
    projectDescription:
      "A modern shopping mall construction project featuring innovative architectural design. This mall includes multiple floors of retail spaces, food courts, and entertainment zones. Built with cutting-edge construction methods for long-lasting quality.",
    keyDetails: "Number of floors: 8, featuring basement parking and rooftop amenities.",
    projectPhotos: [
      { id: "const-uttara-1", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Construction View 1", type: "photos" },
      { id: "const-uttara-2", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Construction View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.mirpurDohs,
    coverImage: CONSTRUCTION_COVER_IMAGES.mirpurDohs,
    location: "Mirpur DOHS",
    title: "Luxury Villa Construction",
    projectDescription:
      "An exclusive luxury villa construction in the prestigious Mirpur DOHS area. Each villa features premium finishes, spacious layouts, and modern amenities. Our construction team ensures the highest standards of quality and craftsmanship.",
    keyDetails: "3-story villas with private gardens and dedicated parking spaces.",
    projectPhotos: [
      { id: "const-mirpur-dohs-1", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur DOHS Villa View 1", type: "photos" },
      { id: "const-mirpur-dohs-2", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur DOHS Villa View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.dhanmondi,
    coverImage: CONSTRUCTION_COVER_IMAGES.dhanmondi,
    location: "Dhanmondi",
    title: "Office Tower Construction",
    projectDescription:
      "A premium office tower construction in iconic Dhanmondi, offering modern workspace solutions. The building features smart building technology, energy-efficient systems, and flexible floor plans. Designed for businesses seeking prestigious addresses.",
    keyDetails: "Number of floors: 12, with high-speed elevators and 24/7 security systems.",
    projectPhotos: [
      { id: "const-dhanmondi-1", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhanmondi Office View 1", type: "photos" },
      { id: "const-dhanmondi-2", src: "/assets/development/dhaka-project.jpeg", alt: "Dhanmondi Office View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.cumilla,
    coverImage: CONSTRUCTION_COVER_IMAGES.cumilla,
    location: "Cumilla",
    title: "Hospital Construction",
    projectDescription:
      "A state-of-the-art hospital construction project designed to serve the healthcare needs of the region. The facility includes modern medical equipment infrastructure, patient rooms, and surgical suites. Built with specialized construction standards for healthcare facilities.",
    keyDetails: "Number of floors: 6, with dedicated ICU, emergency, and outpatient departments.",
    projectPhotos: [
      { id: "const-cumilla-1", src: "/assets/development/cumilla-project.jpeg", alt: "Cumilla Hospital View 1", type: "photos" },
      { id: "const-cumilla-2", src: "/assets/development/khulna-project.jpeg", alt: "Cumilla Hospital View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.sylhet,
    coverImage: CONSTRUCTION_COVER_IMAGES.sylhet,
    location: "Sylhet",
    title: "Educational Institution",
    projectDescription:
      "A comprehensive educational institution construction featuring modern classrooms, laboratories, and recreational facilities. The design promotes a conducive learning environment with sustainable building practices. Perfect for nurturing future generations.",
    keyDetails: "Number of floors: 5, with auditorium, library, and sports facilities.",
    projectPhotos: [
      { id: "const-sylhet-1", src: "/assets/development/sylhet-project.jpeg", alt: "Sylhet School View 1", type: "photos" },
      { id: "const-sylhet-2", src: "/assets/development/cumilla-project.jpeg", alt: "Sylhet School View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.uttara2,
    coverImage: CONSTRUCTION_COVER_IMAGES.uttara2,
    location: "Uttara",
    title: "Apartment Complex",
    projectDescription:
      "A modern apartment complex construction offering affordable yet quality housing. The project features efficient layouts, community spaces, and essential amenities. Designed for urban families seeking comfortable living.",
    keyDetails: "Number of floors: 16, with community hall and children's play area.",
    projectPhotos: [
      { id: "const-uttara2-1", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Apartment View 1", type: "photos" },
      { id: "const-uttara2-2", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Apartment View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: CONSTRUCTION_IMAGES.mirpur1,
    coverImage: CONSTRUCTION_COVER_IMAGES.mirpur1,
    location: "Mirpur 1",
    title: "Industrial Facility",
    projectDescription:
      "A comprehensive industrial facility construction featuring modern manufacturing infrastructure. The project includes warehouse spaces, production areas, and administrative offices. Built to support growing industrial needs with quality construction.",
    keyDetails: "Total area: 50,000 sq ft with heavy load capacity and logistics facilities.",
    projectPhotos: [
      { id: "const-mirpur1-1", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur Industrial View 1", type: "photos" },
      { id: "const-mirpur1-2", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur Industrial View 2", type: "photos" },
    ],
    projectVideos: [],
  },
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
    title: "Modern Living Room Design",
    projectDescription:
      "A stunning modern living room interior design featuring contemporary furniture, elegant lighting, and sophisticated color palettes. Our designers create spaces that reflect your personality while maximizing comfort and functionality. Every detail is carefully curated to achieve harmony and style.",
    keyDetails: "Area: 500 sq ft with custom furniture and automated lighting systems.",
    projectPhotos: [
      { id: "int-dhaka-1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Interior View 1", type: "photos" },
      { id: "int-dhaka-2", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhaka Interior View 2", type: "photos" },
      { id: "int-dhaka-3", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Dhaka Interior View 3", type: "photos" },
    ],
    projectVideos: [
      { id: "int-dhaka-v1", src: "/assets/development/dhaka-project.jpeg", alt: "Dhaka Interior Video 1", type: "video" },
    ],
  },
  {
    image: INTERIOR_IMAGES.khulna,
    coverImage: INTERIOR_COVER_IMAGES.khulna,
    location: "Khulna",
    title: "Luxury Bedroom Suite",
    projectDescription:
      "An exquisite luxury bedroom suite design featuring premium materials and serene aesthetics. The design focuses on creating a peaceful retreat with elegant furnishings and ambient lighting. Perfect for those who appreciate refined comfort and style.",
    keyDetails: "Master suite with walk-in closet and ensuite bathroom design.",
    projectPhotos: [
      { id: "int-khulna-1", src: "/assets/development/khulna-project.jpeg", alt: "Khulna Bedroom View 1", type: "photos" },
      { id: "int-khulna-2", src: "/assets/development/sylhet-project.jpeg", alt: "Khulna Bedroom View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.uttara,
    coverImage: INTERIOR_COVER_IMAGES.uttara,
    location: "Uttara",
    title: "Contemporary Kitchen Design",
    projectDescription:
      "A contemporary kitchen interior design featuring modern appliances, efficient storage solutions, and stylish finishes. The kitchen is designed for both functionality and aesthetics, making cooking a delightful experience. Premium materials ensure durability and easy maintenance.",
    keyDetails: "Modular kitchen with island counter and smart appliance integration.",
    projectPhotos: [
      { id: "int-uttara-1", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Kitchen View 1", type: "photos" },
      { id: "int-uttara-2", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Kitchen View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.mirpurDohs,
    coverImage: INTERIOR_COVER_IMAGES.mirpurDohs,
    location: "Mirpur DOHS",
    title: "Executive Office Interior",
    projectDescription:
      "A sophisticated executive office interior design featuring premium furniture and professional aesthetics. The design creates an environment that promotes productivity while reflecting corporate excellence. Custom solutions for meeting rooms and private offices included.",
    keyDetails: "Executive suite with conference room and reception area design.",
    projectPhotos: [
      { id: "int-mirpur-dohs-1", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur DOHS Office View 1", type: "photos" },
      { id: "int-mirpur-dohs-2", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur DOHS Office View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.dhanmondi,
    coverImage: INTERIOR_COVER_IMAGES.dhanmondi,
    location: "Dhanmondi",
    title: "Restaurant Interior Design",
    projectDescription:
      "An inviting restaurant interior design featuring unique ambiance and comfortable seating. The design creates a memorable dining experience through thoughtful lighting, textures, and spatial arrangements. Perfect for establishments seeking distinctive identity.",
    keyDetails: "150 seating capacity with bar area and private dining rooms.",
    projectPhotos: [
      { id: "int-dhanmondi-1", src: "/assets/development/dhanmondi-project.jpeg", alt: "Dhanmondi Restaurant View 1", type: "photos" },
      { id: "int-dhanmondi-2", src: "/assets/development/dhaka-project.jpeg", alt: "Dhanmondi Restaurant View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.cumilla,
    coverImage: INTERIOR_COVER_IMAGES.cumilla,
    location: "Cumilla",
    title: "Retail Store Design",
    projectDescription:
      "A captivating retail store interior design featuring attractive displays and customer-friendly layouts. The design maximizes product visibility while creating an enjoyable shopping experience. Custom fixtures and lighting solutions included.",
    keyDetails: "2,000 sq ft retail space with display systems and storage areas.",
    projectPhotos: [
      { id: "int-cumilla-1", src: "/assets/development/cumilla-project.jpeg", alt: "Cumilla Store View 1", type: "photos" },
      { id: "int-cumilla-2", src: "/assets/development/khulna-project.jpeg", alt: "Cumilla Store View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.sylhet,
    coverImage: INTERIOR_COVER_IMAGES.sylhet,
    location: "Sylhet",
    title: "Spa & Wellness Center",
    projectDescription:
      "A tranquil spa and wellness center interior design featuring calming aesthetics and functional treatment spaces. The design creates a sanctuary for relaxation with natural elements and soothing colors. Every space is designed to promote wellness and peace.",
    keyDetails: "Full spa facility with treatment rooms, sauna, and relaxation lounge.",
    projectPhotos: [
      { id: "int-sylhet-1", src: "/assets/development/sylhet-project.jpeg", alt: "Sylhet Spa View 1", type: "photos" },
      { id: "int-sylhet-2", src: "/assets/development/cumilla-project.jpeg", alt: "Sylhet Spa View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.uttara2,
    coverImage: INTERIOR_COVER_IMAGES.uttara2,
    location: "Uttara",
    title: "Penthouse Interior",
    projectDescription:
      "A luxurious penthouse interior design featuring panoramic views and premium finishes. The design maximizes the unique advantages of penthouse living with open floor plans and elegant furnishings. Custom solutions for every room ensure a cohesive luxury experience.",
    keyDetails: "3,500 sq ft penthouse with rooftop terrace and home theater.",
    projectPhotos: [
      { id: "int-uttara2-1", src: "/assets/development/uttara2-project.jpeg", alt: "Uttara Penthouse View 1", type: "photos" },
      { id: "int-uttara2-2", src: "/assets/development/uttara-project.jpeg", alt: "Uttara Penthouse View 2", type: "photos" },
    ],
    projectVideos: [],
  },
  {
    image: INTERIOR_IMAGES.mirpur1,
    coverImage: INTERIOR_COVER_IMAGES.mirpur1,
    location: "Mirpur 1",
    title: "Apartment Renovation",
    projectDescription:
      "A complete apartment renovation interior design transforming living spaces into modern, functional homes. The design updates every room with contemporary style while respecting the existing structure. Cost-effective solutions that deliver impressive results.",
    keyDetails: "Complete 1,200 sq ft apartment renovation with modern fixtures.",
    projectPhotos: [
      { id: "int-mirpur1-1", src: "/assets/development/mirpur1-project.jpeg", alt: "Mirpur Apartment View 1", type: "photos" },
      { id: "int-mirpur1-2", src: "/assets/development/mirpur-dohs-project.jpeg", alt: "Mirpur Apartment View 2", type: "photos" },
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
    href: "/construction",
  },
  {
    image: SERVICE_IMAGES.interior,
    title: "Interior",
    href: "/interior",
  },
];
