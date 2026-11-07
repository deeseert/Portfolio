import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import { images, type SiteImage } from "./images";

function NoBreak({ children }: { children: ReactNode }) {
  return <span className="nb">{children}</span>;
}

export const links = {
  email: "mailto:gioacchino.dinardo@gmail.com",
  emailAddress: "gioacchino.dinardo@gmail.com",
  linkedin: "https://www.linkedin.com/in/gioacchino-di-nardo/",
  github: "https://github.com/deeseert",
  devhub: "https://github.com/deeseert/devHub",
  cv: asset("/download/gioacchino-dinardo-cv.pdf"),
};

export type FeaturedProject = {
  id: string;
  label: string;
  title: string;
  description: ReactNode;
  href: string;
  linkLabel: string;
  image: SiteImage;
  objectPosition?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "p-reach",
    label: "Reach plc, 2019 to 2023",
    title: "80+ Reach publications",
    description: "Account and reader features across the UK's largest news publisher, including the Mirror.",
    href: "https://www.mirror.co.uk/",
    linkLabel: "Visit the Mirror",
    image: images.reachBrands,
    objectPosition: "center",
  },
  {
    id: "p-ok",
    label: "Reach plc",
    title: "OK! Edit Beauty Box",
    description: (
      <>
        A custom <NoBreak>e-commerce</NoBreak> experience for OK! magazine&apos;s beauty edit.
      </>
    ),
    href: "https://www.ok.co.uk/beauty-edit/",
    linkLabel: "Visit the site",
    image: images.okBeauty,
  },
];

export type EarlierProject = {
  id: string;
  className: "atom" | "jolie" | "lawyered";
  title: string;
  description: string;
  imageHref: string;
  image: SiteImage;
  revealDelay?: number;
  magnetic?: boolean;
  links: { label: string; href: string }[];
  privateCode?: boolean;
};

export const earlierProjects: EarlierProject[] = [
  {
    id: "p-atom",
    className: "atom",
    title: "AtomInvest",
    description: "Web app for alternative investments. React, Node.js and MongoDB.",
    imageHref: asset("/img/atominvest.png"),
    image: images.atomInvest,
    magnetic: true,
    links: [{ label: "See the screenshot", href: asset("/img/atominvest.png") }],
    privateCode: true,
  },
  {
    id: "p-jolie",
    className: "jolie",
    title: "Jolie",
    description: "An online shop for clothes and accessories. React front end, Rails back end.",
    imageHref: "https://github.com/deeseert/my-ecommerce-app-front-end",
    image: images.jolie,
    revealDelay: 100,
    links: [
      { label: "Watch the demo", href: "https://www.youtube.com/watch?v=kGR7AQgMSO0" },
      { label: "Code", href: "https://github.com/deeseert/my-ecommerce-app-front-end" },
    ],
  },
  {
    id: "p-lawyered",
    className: "lawyered",
    title: "Lawyered",
    description: "Find a lawyer by rating, price and location. React front end, Rails back end.",
    imageHref: "https://github.com/deeseert/lawyered-frontend",
    image: images.lawyered,
    revealDelay: 180,
    links: [
      { label: "Watch the demo", href: "https://www.youtube.com/watch?v=nlrv59Q-bSs" },
      { label: "Code", href: "https://github.com/deeseert/lawyered-frontend" },
    ],
  },
];

export const experience: { when: string; title: string; role?: string; items: ReactNode[] }[] = [
  {
    when: "Nov 2023 to present",
    title: "eDreams ODIGEO",
    role: "Front End Software Engineer, Checkout and Payments",
    items: [
      "Apple Pay for renewal payments, a promo code flow ahead of payment, and an in product feedback flow that sends customer problems to the product team",
      "Introduced AI assisted, spec driven development in a team of six, since picked up by around 12 teams",
    ],
  },
  {
    when: "Oct 2019 to Nov 2023",
    title: "Reach plc",
    role: "Full Stack Software Engineer, London",
    items: [
      "Rebuilt a legacy Java backend as Node.js and TypeScript microservices",
      "Built the account dashboard in React and TypeScript, supporting 5M+ user registrations",
      <>
        Launched a reader contribution scheme (Stripe) and a custom <NoBreak>e-commerce</NoBreak> experience
      </>,
    ],
  },
  {
    when: "2017 to 2019",
    title: "Before that",
    items: [
      "AtomInvest, Full Stack Developer (React, Node.js, MongoDB), 2019",
      <>
        NovoVape Ltd, <NoBreak>Co-founder</NoBreak> of an <NoBreak>e-commerce</NoBreak> business in the UK and Italy,
        2017 to 2018
      </>,
      "Barclays UK, Business Analyst, and Fortune Law, Paralegal, 2017 to 2019",
    ],
  },
  {
    when: "Education",
    title: "Law and software engineering",
    items: [
      "Flatiron School, Software Engineering Immersive, London, 2019",
      "BPP Law School, Graduate Diploma in Law, 2017 to 2018",
      "University of Naples, Master's in Law, 2015",
    ],
  },
];

export const stack: { title: string; items: string[]; accent?: boolean }[] = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "GraphQL", "styled-components", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "Express", "Postgres", "MongoDB", "Kafka", "AWS", "Docker"] },
  { title: "Quality", items: ["TDD", "Jest", "React Testing Library", "Cypress", "Storybook", "CI"] },
  { title: "AI assisted development", items: ["Claude", "GitHub Copilot", "Spec driven workflows"], accent: true },
];

export const languages: { name: string; level: string }[] = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Spanish", level: "Intermediate" },
  { name: "German", level: "Basic" },
];

export const story = {
  lead: (
    <>
      I studied law in Naples and London, worked as a business analyst at Barclays and a paralegal at Fortune Law, and
      co-founded an <NoBreak>e-commerce</NoBreak> business. In 2019 I moved into software through Flatiron School.
    </>
  ),
  paragraphs: [
    "That background is why I care about products that make sense to people who are not developers. I work best in small, product minded teams.",
    "I use AI coding tools every day and introduced spec driven development in my team.",
    "When I am not coding, I like meeting people and exploring with my camera.",
  ],
};
