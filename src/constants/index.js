const navLinks = [
  {
    name: "Trabajos",
    link: "#work",
  },
  {
    name: "Cualidades",
    link: "#cualities",
  },
  {
    name: "Experiencia",
    link: "#experience",
  },
  {
    name: "Habilidades",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Conceptos", imgPath: "/images/concepts.svg" },
  { text: "Diseños", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
];

const abilities = [
  {
    imgPath: "/images/aprendizaje.png",
    title: "Aprendizaje Rápido",
    desc: "Me considero alguien que aprende rápidamente, adaptándome a nuevas tecnologías y herramientas.",
  },
  {
    imgPath: "/images/flexibilidad.png",
    title: "Flexibilidad y Adaptabilidad",
    desc: "Estoy abierto a adaptarme a diferentes entornos y absorber ideas o enfoques nuevos.",
  },
  {
    imgPath: "/images/conversacion.png",
    title: "Comunicación Clara",
    desc: "Soy asertivo y capaz de escuchar activamente, abierto a recibir críticas constructivas y sugerencias.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/ts-logo-128.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind-logo.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const expCards = [
  {
    review:
      "Además de las actividades técnicas, adquirí habilidades en el uso de Microsoft Office, aprendí metodologías de trabajo colaborativo, mejoré mi capacidad de organización de proyectos y desarrollé la diligencia necesaria para cumplir con las tareas asignadas.",
    imgPath: "/images/logos/san-sebas-grande-god.png",
    logoPath: "/images/logos/logo2(1)(1).png",
    title: "Pasante de IT",
    company: "Centro Educativo San Sebastián",
    date: "Febrero 2022 - Junio 2022",
    responsibilities: [
      "Aprendí comandos de Linux Bash y Powershell.",
      "Instalé, reparé y configuré computadoras de Escritorio.",
      "Colaboré en equipo para resolver problemas técnicos.",
      "Mejoré la organización y planificación de proyectos.",
      "Realicé el mantenimiento de cables RJ45 y conectores.",
      "Desarrollé y profundicé mis habilidades blandas.",
    ],
  },
  {
    review:
      "Durante mi rol como Aprendiz de Front-End, profundicé en las bases de la lógica de programación, adquirí habilidades de trabajo con bases de datos y comprendí cómo se desarrolla software en un entorno real, colaborando estrechamente con el equipo para entregar soluciones funcionales y escalables.",
    imgPath: "/images/logos/gv-logo.png",
    logoPath: "/images/logos/logo2.png",
    title: "Aprendiz de Front-End",
    company: "Sercon - A.J Vierci",
    date: "Julio 2023 - Actualmente",
    responsibilities: [
      "Aprendí las bases del desarrollo Front-End con React y TypeScript.",
      "Desarrollé en equipo un proyecto de Galería de Fotos para uso interno.",
      "Implementé prácticas de desarrollo ágil y control de versiones con Git.",
      "Comprendí el flujo de programación en un entorno real, integrando componentes y APIs.",
      "Aproveché al máximo las tendencias de IA para mejorar la eficiencia del desarrollo.",
      "Me puse al día con las últimas tendencias y tecnologías en desarrollo web.",
    ],
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
    alt: "Tienda MERN",
    title: "Tienda con Stack MERN",
    desc: "Una tienda online construida con MongoDB, Express, React y Node.js. Es un prototipo de una tienda que permite a los usuarios navegar por productos, agregarlos al carrito y realizar pedidos.",
    links: {
      repo: "https://github.com/usuario/tienda-mern",
      post: "www.linkedin.com/in/josé-ramírez-b74256265",
      live: "https://tienda-mern-kuko.netlify.app/",
    },
  },
  {
    id: 2,
    img: "/images/proyecto2.png",
    alt: "Clon de Minecraft",
    title: "Clon de Minecraft con React y Three.js",
    desc: "Un clon de Minecraft para la web con React y Three.js. Permite a los usuarios interactuar con bloques del juego, construir estructuras y otras funciones básicas del juego.",
    links: {
      repo: "https://github.com/usuario/kukocraft",
      post: "https://linkedin.com/posts/usuario_kukocraft",
      live: "https://kukocraft.netlify.app/",
    },
  },
  {
    id: 3,
    img: "/images/proyecto3.png",
    alt: "Diario de Viajes",
    title: "Diario de Viajes en Paraguay",
    desc: "Un diario de viajes a tener en cuenta para viajar por el País. Incluye información sobre lugares turísticos, gastronomía y cultura paraguaya.",
    links: {
      repo: "https://github.com/kuuukooo/viajesParaguay",
      post: "https://www.linkedin.com/posts/jos%C3%A9-ram%C3%ADrez-b74256265_hola-a-todos-acabo-de-completar-mi-tercer-activity-7229517865626828800-1edJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_rAgB1HBfglGYehrtPUXWfXrF2HAZ_Y0",
      live: "https://viajesparaguay.netlify.app/",
    },
  },
  {
    id: 4,
    img: "/images/proyecto4.png",
    alt: "Juego de Dieces",
    title: "Juego de Dieces",
    desc: "Un juego de dados clásico desarrollado con React. Permite a los usuarios jugar al juego de Dieces, donde pueden lanzar dados y acumular puntos.",
    links: {
      repo: "https://github.com/kuuukooo/tenziesjuego",
      post: "https://www.linkedin.com/posts/jos%C3%A9-ram%C3%ADrez-b74256265_reactjs-webdevelopment-gamedev-activity-7238973624156606464-v77M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_rAgB1HBfglGYehrtPUXWfXrF2HAZ_Y0",
      live: "https://diecesjuegoreact.netlify.app/",
    },
  },
];

export {
  words,
  abilities,
  expCards,
  expLogos,
  socialImgs,
  techStackImgs,
  navLinks,
  projectData,
};
