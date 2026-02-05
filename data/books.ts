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
        btn: 'Amazon 🇨🇦',
        link: 'https://amzn.to/46q6ZdB',
      },
      us: {
        btn: 'Amazon 🌎',
        link: 'https://amzn.to/3NXfKFH',
      },
      br: {
        btn: 'Amazon 🇧🇷',
        link: 'https://a.co/d/b1nrmtj',
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
        btn: 'Amazon 🇨🇦',
        link: 'https://amzn.to/3MqJUkb',
      },
      us: {
        btn: 'Amazon 🌎',
        link: 'https://amzn.to/4a1d8PR',
      },
      br: {
        btn: 'Amazon 🇧🇷',
        link: 'https://a.co/d/hQ6MdZa',
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
        btn: 'Amazon 🇨🇦',
        link: 'https://amzn.to/4r6ZPn4',
      },
      us: {
        btn: 'Amazon 🌎',
        link: 'https://amzn.to/4tp4kLi',
      },
      br: {
        btn: 'Amazon 🇧🇷',
        link: 'https://a.co/d/5GHY5ld',
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
        btn: 'Amazon 🇨🇦',
        link: 'https://amzn.to/46AqXCr',
      },
      us: {
        btn: 'Amazon 🌎',
        link: 'https://amzn.to/4qjXJis',
      },
      br: {
        btn: 'Amazon 🇧🇷',
        link: 'https://a.co/d/1zF03Lz',
      },
    },
    description:
      'Un libro infantil rimado sobre una aventura súper divertida que convierte la higiene diaria en pura diversión. También disponible en portugués brasileño, inglés y francés.',
  },
  {
    name: 'Little Words, Grands Amis',
    image: '/images/little-words.png',
    slug: 'little-words',
    url: {
      canada: {
        btn: 'Amazon 🇨🇦',
        link: 'https://amzn.to/3Mf3TCf',
      },
      us: {
        btn: 'Amazon 🌎',
        link: 'https://amzn.to/3O8STXI',
      },
      br: {
        btn: 'Amazon 🇧🇷',
        link: 'https://a.co/d/97EUVXC',
      },
    },
    description:
      "This sweet bilingual children's book that helps children ages 3–7 discover basic vocabulary in English and French through playful dialogue and everyday moments.",
  },
];
