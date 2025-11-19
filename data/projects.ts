import { Book } from './books';

export interface PersonalProject {
  name: string;
  image: string;
  url?: string;
  slug?: string;
  description: string;
  tbr?: boolean; // To Be Released
}

export interface Project extends PersonalProject {
  app?: boolean;
  git?: string;
  difficulties: string;
  technologies: string;
}

export type PersonalProjects = PersonalProject[];
export type Projects = Project[];
export type VibeCodingProjects = Project[];
export type ProjectTypes = Project | PersonalProject | Book;

export const projects: Projects = [
  {
    name: 'Tiny Dose',
    image: '/images/tiny-dose.png',
    slug: 'tiny-dose',
    app: true,
    git: 'https://github.com/suzynakayama/tiny-dose-public',
    description:
      'Mobile app for calculating children Ibuprofen and Acetaminophen doses according to CHEO guidelines.',
    difficulties:
      "I faced challenges in integrating the AdMob SDK as I didn't have prior experience with it. I also had to learn how to publish to the App Store and Google Play, which was a new process for me.",
    technologies: 'React Native, Typescript, Jest, AdMob.',
    tbr: true,
  },
  {
    name: 'MyFooter NPM Package',
    image: '/images/react-myfooter.png',
    slug: 'myfooter',
    url: 'https://www.npmjs.com/package/react-myfooter',
    git: 'https://github.com/suzynakayama/myfooter-package',
    description:
      'It is a simple footer component that can be used with your projects.',
    difficulties:
      'It was my first time creating an NPM package, so I had to learn how to set up the package.json file and publish it to NPM.',
    technologies: 'React, Typescript.',
  },
  {
    name: 'Portfolio v1',
    image: '/images/portfolio-v1.png',
    slug: 'portfolio-v1',
    url: 'https://suzynakayama-v1.netlify.app/',
    git: 'https://github.com/suzynakayama/Suzy-Nakayama-v1',
    description: 'First version of my portfolio.',
    difficulties: '',
    technologies: 'React, CSS, JavaScript, GitHub Pages.',
  },
];

export const vibeCodingProjects: Projects = [
  {
    name: "Fardousi's Home Daycare",
    image: '/images/FK.png',
    slug: 'fardousis-home-daycare',
    url: 'https://fardousi-home-daycare.netlify.app/',
    git: 'https://github.com/suzynakayama/fardousi-findleycreek-care',
    description:
      'Website for Fardousi’s Home Daycare, a licensed daycare located in Findley Creek, Ontario.',
    difficulties:
      "First time using Lovable and vibe coding, so I had to learn how to prompt the AI effectively to build the website according to the client's needs.",
    technologies: 'React, Typescript, Vibe Coding, Lovable AI.',
    tbr: false,
  },
  {
    name: 'Caught You',
    image: '/images/caught-you.png',
    slug: 'caught-you',
    app: true,
    url: 'https://caught-you.netlify.app/',
    git: 'https://github.com/suzynakayama/caught-you-ai',
    description:
      'Social game where AI playfully “detects lies” through bold questions and dramatic shareable reactions',
    difficulties:
      'Creating an engaging user experience while ensuring the AI responses were entertaining and appropriate was challenging.',
    technologies: 'React, Typescript, Vibe Coding, Lovable AI.',
  },
];

export const personalProjects: PersonalProjects = [
  {
    name: 'Benny and the Little Dirt Bug',
    image: '/images/benny.png',
    slug: 'benny',
    url: 'https://a.co/d/8DkFZvh',
    description:
      "A rhyming children's book about a super-bright adventure that turns daily hygiene into pure fun. Also available in Brazilian Portuguese, Spanish, and French.",
  },
  {
    name: 'Little Words, Grands Amis',
    image: '/images/liam-zoe.png',
    slug: 'little-words',
    description:
      "This sweet bilingual children's book that helps children ages 3–7 discover basic vocabulary in English and French through playful dialogue and everyday moments.",
    tbr: true,
  },
  {
    name: 'Hey Vexa',
    image: '/images/vexa.png',
    slug: 'vexa',
    url: 'https://www.youtube.com/@hey_vexa',
    description:
      'YouTube channel exploring human behavior through an AI persona. Also available in TikTok and Instagram @hey_vexa.',
    tbr: true,
  },
];
