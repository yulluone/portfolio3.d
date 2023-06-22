import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  gcp,
  vue,
  docker,
  authui,
  portfolio1,
  portfolio2,
  portfolio3,
  rentals,
  netflix,
  wedance,
  thesafehouse,
  edemy,
  ignitus,
  moe,
  sankore,
  wedancelogo,
} from "../public/assets";

export const myDetails = {
  name: "Josh Yullu",
  company: "YulluOneTech",
  phone: "+254 742 092 240",
};

export const greeting = {
  openingStatement: "Hi, I am Yullu",
  intro: "I build stunning and efficient applications solutions for the Web",
};

export const myInfo = {
  about:
    "I'm a skilled software engineer with experience in TypeScript, Javascript and Python, and expertise in frameworks like React, Vue, Node.js, NextJs, and Nuxt. I'm a quick learner and I collaborate closely with clients to create efficient, scalable, and user friendly solutions that solve real-world problems. Let's work together to bring your ideas to reality!",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-End Development",
    icon: mobile,
  },
  {
    title: "API Development",
    icon: backend,
  },
  {
    title: "Dev Ops & Automation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue Js",
    icon: vue,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Google Cloud",
    icon: gcp,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "WeDance",
    icon: wedancelogo,
    iconBg: "#ffff",
    date: "September 2022 - Date",
    points: [
      "Collaborating with the founder, design & dev teams to implement new designs & features like:",
      "Implementing a feed section that curates a list of festivals based on userlocation and preferences.",
      "Building a chat feature for users to connect and plan events",
      "Migrating Email&Password SignUp/SignIn to Google SignIn ",
    ],
  },
  {
    title: "Machine Learning Engineer(Intern)",
    company_name: "Ignitus",
    icon: ignitus,
    iconBg: "#ffff",
    date: "May 2022 - September 2022",
    points: [
      "Worked on 3 projects:",
      "Customer Segmentation & Churn: Complete data pipeline on a heavy database.",
      "Dimensionality curse: Developing PCA and t-SNE algorithms on a database to reduce dimensionality.",
      "Building pipelines with Pandas: Detecting hidden insights in a health-related dataset.",
    ],
  },
  {
    title: "ICT Officer (Intern)",
    company_name: "Ministry of Education, Nairobi",
    icon: moe,
    iconBg: "#ffff",
    date: "Jan 2022 - May 2022",
    points: [
      "Collaborating with the existing dev team to revamp the NEMIS UI using ReactJs",
      "Hardware installation and repair(PCs & Networking Equipment)",
      "Training non-technical staff on internal systems use",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Sankore 2.0",
    icon: sankore,
    iconBg: "#383E56",
    date: "April 2021 - December 2021",
    points: [
      "Building fullstack applications using React & Node that make use of smart contracts",
      "Developing smart contracts using Rust in the NEAR Protocol",
      "Enrolling and training Campus Students in web# and blockchain",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but YulluOneTech proved me wrong.",
    name: "Dyllon Musila",
    designation: "Founder",
    company: "TheSafeHouse",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' needs and success like YulluOneTech does.",
    name: "Jim Njagi",
    designation: "ICTO",
    company: "MOE",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After YulluOneTech optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Alex",
    designation: "Founder",
    company: "WeDance",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Portfolio3.D",
  //   description: "A 3D testament of the skill growth.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "threejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: portfolio3,
  //   source_code_link: "https://github.com/",
  //   demo_link: "",
  // },
  {
    name: "Netflix Rebuild",
    description:
      "A rebuild of one of my favourites User Interfaces, a showcase if my front end skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "api-integration",
        color: "green-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
    demo_link: "https://netflix-clone-743e0.web.app/",
  },
  {
    name: "Portfolio1.0",
    description:
      "A portfolio starter template, made for creatives and devs to showcase their work. Easy to clone and use.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: portfolio1,
    source_code_link: "https://github.com/",
    demo_link: "https://dev-portfolio-starter.vercel.app/",
  },
  {
    name: "Portfolio2.0",
    description:
      "My previous portfolio website. Clean and minimal. Make it your own by cloning the git repo and adding our information.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "planetscale",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/portfolio2.0",
    demo_link: "https://yulluone.vercel.app",
  },

  {
    name: "WeDance",
    description:
      "A platform that connects people passionate about dance via dance events and workshops.",
    tags: [
      {
        name: "vue-nuxt",
        color: "green-text-gradient",
      },
      {
        name: "firebase+firestore",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: wedance,
    demo_link: "https://wedance.vip/",
  },
  // {
  //   name: "TheSafeHouse",
  //   description:
  //     "A website and blog for a mental health organisation aimed at creating a virtual safe space for the Kenyan youth to share about mental health anfd life",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "vercel",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: thesafehouse,
  //   source_code_link: "https://github.com/",
  //   demo_link: "https://thesafehouse.vercel.app/",
  // },
  {
    name: "Edemy",
    description:
      "A comprehensive E-Learning Marketplace offering students freedom of choice and educators flexibility of work.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mpesa-daraja",
        color: "green-text-gradient",
      },
    ],
    image: edemy,
    source_code_link: "https://github.com/edemy-client",
  },
  {
    name: "Rentals",
    description:
      "Real-Estate rental booking UI re-imagined based of off AirBnB, a showcase if my front end skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "api-integration",
        color: "green-text-gradient",
      },
    ],
    image: rentals,
    source_code_link: "https://github.com/joshuamwo/airbnb-clone",
    demo_link: "https://air-bnb-clone-4b0bd.web.app/",
  },
  {
    name: "Auth Template",
    description:
      "An comprehensive authentication for Nextjs app. Easy to use and customize. Go to reposiroty.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: authui,
    source_code_link: "https://github.com/joshuamwo/supabase-nextjs-auth",
    demo_link: "https://yullu.me/work/supabase-authui",
  },
];

export { services, technologies, experiences, testimonials, projects };
