const navLinks = [
  { key: "work", link: "#work" },
  { key: "qualities", link: "#cualities" },
  { key: "experience", link: "#experience" },
  { key: "skills", link: "#skills" },
  { key: "aboutme", link: "#aboutme" },
];

const abilities = [
  {
    key: "fastLearning",
    imgPath: "/images/aprendizaje.png",
  },
  {
    key: "flexibility",
    imgPath: "/images/flexibilidad.png",
  },
  {
    key: "clearCommunication",
    imgPath: "/images/conversacion.png",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.webp",
    link: "https://react.dev/",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/ts-logo-128.webp",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.webp",
    link: "https://nodejs.org/",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind-logo.webp",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
    link: "https://git-scm.com/",
  },
];

const expCardsStatic = [
  {
    key: "itIntern",
    imgPath: "/images/logos/san-sebas-grande-god.png",
    logoPath: "/images/logos/logo2(1)(1).png",
  },
  {
    key: "frontendApprentice",
    imgPath: "/images/logos/gv-logo.png",
    logoPath: "/images/logos/logo2.png",
  },
];

const expLogos = [
  {
    name: "Centro Educativo San Sebastián",
    imgPath: "/images/logos/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logos/logo2.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/kuuko0?igsh=MzFtOTZkZTZkZzYz",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/jramirezfigueredo",
  },
  {
    name: "x",
    imgPath: "/images/github-logo.png",
    url: "https://github.com/kuuukooo",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/josé-ramírez-b74256265",
  },
];

const projectData = [
  {
    id: 1,
    img: "/images/proyecto1.png",
    links: {
      repo: "https://github.com/usuario/tienda-mern",
      post: "https://www.linkedin.com/in/josé-ramírez-b74256265",
      live: "https://tienda-mern-kuko.netlify.app/",
    },
  },
  {
    id: 2,
    img: "/images/proyecto2.png",
    links: {
      repo: "https://github.com/usuario/kukocraft",
      post: "https://linkedin.com/posts/usuario_kukocraft",
      live: "https://kukocraft.netlify.app/",
    },
  },
  {
    id: 3,
    img: "/images/proyecto3.png",
    links: {
      repo: "https://github.com/kuuukooo/viajesParaguay",
      post: "https://www.linkedin.com/.../activity-7229517865626828800-1edJ",
      live: "https://viajesparaguay.netlify.app/",
    },
  },
  {
    id: 4,
    img: "/images/proyecto4.png",
    links: {
      repo: "https://github.com/kuuukooo/tenziesjuego",
      post: "https://www.linkedin.com/.../activity-7238973624156606464-v77M",
      live: "https://diecesjuegoreact.netlify.app/",
    },
  },
];

const hobbies = [
  {
    id: 1,
    title: "Reading",
    description: "Exploring new worlds through literature and tech books",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Going for Walks",
    description: "Finding inspiration in nature and city exploration",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Writing",
    description: "Documenting thoughts, ideas, and creative stories",
    category: "Creative",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
  },
];

const favoriteGames = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    link: "https://www.zelda.com/breath-of-the-wild/",
    description: "Open-world adventure that redefined exploration",
    genre: "Action-Adventure",
    platform: "Nintendo Switch",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Minecraft",
    description: "Infinite creativity in a blocky universe",
    genre: "Sandbox",
    platform: "PC, Console, Mobile",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Counter-Strike 2",
    description: "Tactical FPS with competitive gameplay",
    genre: "FPS",
    platform: "PC (Steam)",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Team Fortress 2",
    description: "Class-based multiplayer mayhem",
    genre: "FPS",
    platform: "PC (Steam)",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
  },
];

const spotifyContent = [
  {
    id: 1,
    title: "Coding Vibes",
    type: "playlist",
    description: "Perfect beats for programming sessions",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd",
    embedUrl:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator&theme=0",
  },
  {
    id: 2,
    title: "Gaming Soundtrack",
    type: "playlist",
    description: "Epic game music collection",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwAYIy1",
    embedUrl:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwAYIy1?utm_source=generator&theme=0",
  },
  {
    id: 3,
    title: "Chill Coding",
    type: "playlist",
    description: "Relaxed tunes for focused work",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX2UgsUIqnzMP",
    embedUrl:
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX2UgsUIqnzMP?utm_source=generator&theme=0",
  },
];

const stats = [
  { section: "hobbies", count: 3 },
  { section: "games", count: 4 },
  { section: "music", count: 3 },
];

export {
  abilities,
  expCardsStatic,
  expLogos,
  socialImgs,
  navLinks,
  techStackImgs,
  projectData,
  hobbies,
  favoriteGames,
  spotifyContent,
  stats,
};
