window.portfolioConfig = {
  profile: {
    name: "Markus Amberla",
    tagline: "Full Stack Developer | Go & Rust Enthusiast",
    description: "I build robust and scalable applications. Passionate about clean code, performance, and exploring new technologies.",
    picture: "assets/enempi.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/markusamberla/",
      github: "https://github.com/MarkusYPA"
    }
  },
  theme: {
    colors: {
      primary: "amber", // Tailwind color name (e.g., blue, indigo, teal) blue
      background: "neutral-800", // Dark mode background gray-900
      text: "gray-100", //gray-100
      glow: "amber-500",
    }
  },
  skills: [
    "Go", "JavaScript", "Rust", "CSS", "HTML5",
    "Vue", "SQL", "GraphQL", "Postman", "Docker"
  ],
  projects: [
    {
      title: "Multiplayer FPS",
      description: "Rust server and client that runs a self written raycaster game engine.",
      link: "https://github.com/MarkusYPA/fps",
      image: "assets/blobhunter.png"
    },
    {
      title: "Localhost",
      description: "A single-threaded, non-blocking HTTP/1.1 server in Rust, serves static web pages and executes CGI scripts. Supports a flexible configuration system for hosts, ports, routes, error pages etc.",
      link: "https://github.com/MarkusYPA/localhost",
      image: "assets/localhost.png"
    },
    {
      title: "Hyzer Sky",
      description: "Single player disc golf game, released on Steam. I learned to write code by necessity while doing it which sparked my drive to learn to become a prope developer.",
      link: "https://store.steampowered.com/app/1293000/Hyzer_Sky/",
      image: "assets/hyzersky.png"
    },
    {
      title: "Filler",
      description: "A Rust program that plays an area conquering game against cpu opponents.",
      link: "https://github.com/MarkusYPA/filler",
      image: "assets/filler.png"
    },
    {
      title: "Ray Tracer",
      description: "A ray tracer written in Rust that renders scenes with spheres, cubes, planes, and cylinders. Supports diffuse, reflective, refractive, emissive and dielectric materials.",
      link: "https://github.com/AllenLeeyn/rt_2",
      image: "assets/raytracer.png"
    },
    {
      title: "Netfix",
      description: "A web application built with Django that connects users (customers) with service providers (companies). Supports user registration, login, profile management, service browsing, and service requests.",
      link: "https://github.com/MarkusYPA/netfix",
      image: "assets/netfix.png"
    },
    {
      title: "Bomberman DOM",
      description: "A Server-authoritative multiplayer game, in the style of Bomberman. Logic handled on the Node server, with clients sending inputs and rendering the received game state. Chat included.",
      link: "https://github.com/MarkusYPA/bomberman-dom",
      image: "assets/bomberbear.png"
    },
    {
      title: "Social Network",
      description: "Social network that contains followers, user profiles, groups, events, notifications and chats. The frontend is developed using Vue.js, and the backend is written in Go with an SQLite database, dockerized.",
      link: "https://github.com/MarkusYPA/social-network",
      image: "assets/socialnetwork.png"
    },
    {
      title: "Real Time Forum",
      description: "A forum web application that allows users to register, log in, create posts, comment on posts, and send private messages in real-time. Uses SQLite, Go and JS",
      link: "https://github.com/MarkusYPA/real-time-forum",
      image: "assets/realtimeforum.png"
    },
    {
      title: "Lem-In",
      description: "Move ants through a maze in a given minimum amount of turns. Early Go project with JS visualizer.",
      link: "https://github.com/MarkusYPA/lem-in",
      image: "assets/lemin.png"
    },
    {
      title: "Clonernews",
      description: "Weekend challenge, UI for the HackerNews API.",
      link: "https://github.com/MarkusYPA/clonernews",
      image: "assets/clonernews.png"
    },
    {
      title: "Forum",
      description: "Final project of the Go phase. Web forum built with Go, HTML, CSS, JavaScript, and SQLite. Posts and replies in trees with likes/dislikes. User authentication with password encryption, Docker.",
      link: "https://github.com/MarkusYPA/forum",
      image: "assets/forum.png"
    }
    /* {
      title: "",
      description: ".",
      link: "https://github.com/MarkusYPA/",
      image: "assets/.png"
    } */
  ]
};
