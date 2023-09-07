export type itemType = {
  photoUrl: string;
  title: string;
  description: string;
  price: number;
};

const GOODS: itemType[] = [
  {
    photoUrl: new URL("./fishingRod.webp", import.meta.url).href,
    title: "Fishing rod",
    description: "Makes it possible to catch fish.",
    price: 10,
  },
  {
    photoUrl: new URL("./shovel.webp", import.meta.url).href,
    title: "Diamond shovel",
    description: "most useful too after diamond hoe.",
    price: 20,
  },
  {
    photoUrl: new URL("./enderPearl.webp", import.meta.url).href,
    title: "Ender pearl",
    description: "Oooh shiny.",
    price: 5,
  },
  {
    photoUrl: new URL("./coal.webp", import.meta.url).href,
    title: "Coal",
    description: "Warmth, light, optimizm.",
    price: 1,
  },
  {
    photoUrl: new URL("./blazePowder.webp", import.meta.url).href,
    title: "Blaze powder",
    description: "Dunno maybe it's good for cooking.",
    price: 2,
  },
];

export const emerald = new URL(
  "./21-2-minecraft-emerald-png_64x64.ico",
  import.meta.url
).href;
export default GOODS;
