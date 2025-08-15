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
export type ProjectTypes = Project | PersonalProject;

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

export const personalProjects: PersonalProjects = [
  {
    name: 'Benny and the Little Dirt Bug',
    image: '/images/benny.png',
    slug: 'benny',
    url: 'https://a.co/d/8DkFZvh',
    description:
      "A rhyming children's book about a super-bright adventure that turns daily hygiene into pure fun. Also available in Brazilian Portuguese and French.",
  },
  {
    name: 'Little Words, Grands Amis',
    image: '/images/liam-zoe.png',
    slug: 'little-words',
    description:
      "This sweet bilingual children's book that helps children ages 3–7 discover basic vocabulary in English and French through playful dialogue and everyday moments.",
    tbr: true,
  },
];
