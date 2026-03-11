export type HomeCategory = {
  id: number;
  name: string;
  description: string;
};

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    id: 1,
    name: "Rezistente electrice",
    description:
      "Rezistente cartus, banda, inelare, tubulare si solutii custom pentru aplicatii industriale.",
  },
  {
    id: 2,
    name: "Senzori de temperatura",
    description:
      "Termocupluri, termorezistente si senzori speciali pentru intervale largi de temperatura.",
  },
  {
    id: 3,
    name: "Reglare si control",
    description:
      "Regulatoare de temperatura, controlere PID, instrumente de panou si accesorii.",
  },
  {
    id: 4,
    name: "Relee & contactoare statice",
    description:
      "Relee si contactoare statice monofazate si trifazate, accesorii si radiatoare.",
  },
  {
    id: 5,
    name: "Solutii complete",
    description:
      "Ansambluri si subansamble gata de integrat in echipamentele de productie.",
  },
  {
    id: 6,
    name: "Servicii & consultanta",
    description:
      "Suport tehnic la selectie, dimensionare si integrare in procesele existente.",
  },
];

export type HomeFeaturedProduct = {
  id: number;
  title: string;
  category: string;
  highlight: string;
};

export const HOME_FEATURED_PRODUCTS: HomeFeaturedProduct[] = [
  {
    id: 1,
    title: "Relee statice monofazate - SSR",
    category: "Relee & contactoare statice",
    highlight:
      "Metoda trecerii prin zero, semnal de comanda standard, special pentru sarcini rezistive.",
  },
  {
    id: 2,
    title: "Contactoare statice monofazate",
    category: "Relee & contactoare statice",
    highlight:
      "Sigurante rapide, protectie la supracurent si supratensiune, indicare LED.",
  },
  {
    id: 3,
    title: "Relee statice trifazate - TSR",
    category: "Relee & contactoare statice",
    highlight:
      "Control prin trecere prin zero, semnal de control 4 ÷ 32 Vcc sau 8 ÷ 250 Vca.",
  },
  {
    id: 4,
    title: "Accesorii pentru relee statice",
    category: "Accesorii",
    highlight:
      "Radiatoare din aluminiu, capace de protectie si folie tampon pentru montaj.",
  },
];

