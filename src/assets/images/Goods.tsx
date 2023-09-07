export type itemType = {
  photoUrl: string;
  title: string;
  price: number;
};

const GOODS: itemType[] = [
  {
    photoUrl: new URL("./fishingRod.webp", import.meta.url).href,
    title: "Fishing rod",
    price: 10,
  },
  {
    photoUrl: new URL("./shovel.webp", import.meta.url).href,
    title: "Diamond shovel",
    price: 20,
  },
  {
    photoUrl: new URL("./enderPearl.webp", import.meta.url).href,
    title: "Ender pearl",
    price: 5,
  },
  {
    photoUrl: new URL("./coal.webp", import.meta.url).href,
    title: "Coal",
    price: 1,
  },
  {
    photoUrl: new URL("./blazePowder.webp", import.meta.url).href,
    title: "Blaze powder",
    price: 2,
  },
];

export const emerald = new URL(
  "./21-2-minecraft-emerald-png_64x64.ico",
  import.meta.url
).href;
export default GOODS;
