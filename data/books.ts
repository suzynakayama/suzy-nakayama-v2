export interface Book {
  name: string;
  image: string;
  url?: {
    [propName: string]: {
      [propName: string]: string;
    };
  };
  slug?: string;
  description: string;
  tbr?: boolean;
}

export const books: Book[] = [
  {
    name: 'Benny and the Little Dirt Bug',
    image: '/images/benny.png',
    slug: 'benny-en',
    url: {
      canada: {
        btn: 'View book on Amazon Canada',
        link: 'https://a.co/d/2cJyDXY',
      },
      us: {
        btn: 'View book on Amazon US',
        link: 'https://a.co/d/hN6Cpxn',
      },
    },
    description:
      "A rhyming children's book about a super-bright adventure that turns daily hygiene into pure fun. Also available in Brazilian Portuguese, Spanish, and French.",
  },
  {
    name: 'Benny e o Bichinho da Sujeira',
    image: '/images/benny-pt.png',
    slug: 'benny-pt',
    url: {
      canada: {
        btn: 'Ver o livro na Amazon Canada',
        link: 'https://a.co/d/eBHcDPm',
      },
      us: {
        btn: 'Ver o livro na Amazon US',
        link: 'https://a.co/d/bSzRW5P',
      },
      br: {
        btn: 'Ver o livro no Clube de Autores',
        link: 'https://clubedeautores.com.br/livro/benny-e-o-bichinho-da-sujeira',
      },
    },
    description:
      'Um livro infantil com rimas sobre uma aventura superbrilhante que transforma a higiene diária em pura diversão. Também disponível em inglês, espanhol e francês.',
  },
  {
    name: 'Benny et la Petite Bête de la Saleté',
    image: '/images/benny-fr.png',
    slug: 'benny-fr',
    url: {
      canada: {
        btn: 'Voir le livre sur Amazon Canada',
        link: 'https://a.co/d/g0uGctW',
      },
      us: {
        btn: 'Voir le livre sur Amazon US',
        link: 'https://a.co/d/4xnzSGG',
      },
      fr: {
        btn: 'Voir le livre sur Amazon France',
        link: 'https://amzn.eu/d/hNl6exM',
      },
    },
    description:
      "Un livre pour enfants avec des rimes sur une aventure super-brillante qui transforme l'hygiène quotidienne en pur plaisir. Également disponible en portugais brésilien, en espagnol et en anglais.",
  },
  {
    name: 'Benny y el Bichito de la Suciedad',
    image: '/images/benny-es.png',
    slug: 'benny-es',
    url: {
      canada: {
        btn: 'Ver el libro en Amazon Canada',
        link: 'https://a.co/d/4J1uR2o',
      },
      us: {
        btn: 'Ver el libro en Amazon US',
        link: 'https://a.co/d/eAd6lKq',
      },
    },
    description:
      'Un libro infantil rimado sobre una aventura súper divertida que convierte la higiene diaria en pura diversión. También disponible en portugués brasileño, inglés y francés.',
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
