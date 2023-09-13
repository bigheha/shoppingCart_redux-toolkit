export type itemType = {
  photoUrl: string;
  title: string;
  description: string;
  price: number;
};
export type CartItemType = {
  name: string;
  unitPrice: number;
  amount?: number;
};

export interface itemProps {
  props: itemType;
}

export interface CartItemProps {
  props: CartItemType;
}

export interface CartState {
  isOpen: boolean;
  itemsInCart: {
    [key: string]: {
      name: string;
      unitPrice: number;
      amount: number;
    };
  };
}

const GOODS: itemType[] = [
  {
    photoUrl: new URL("./assets/images/fishingRod.webp", import.meta.url).href,
    title: "Fishing rod",
    description: "Makes it possible to catch fish.",
    price: 10,
  },
  {
    photoUrl: new URL("./assets/images/shovel.webp", import.meta.url).href,
    title: "Diamond shovel",
    description: "most useful too after diamond hoe.",
    price: 20,
  },
  {
    photoUrl: new URL("./assets/images/enderPearl.webp", import.meta.url).href,
    title: "Ender pearl",
    description: "Oooh shiny.",
    price: 5,
  },
  {
    photoUrl: new URL("./assets/images/coal.webp", import.meta.url).href,
    title: "Coal",
    description: "Warmth, light, optimizm.",
    price: 1,
  },
  {
    photoUrl: new URL("./assets/images/blazePowder.webp", import.meta.url).href,
    title: "Blaze powder",
    description: "Dunno maybe it's good for cooking.",
    price: 2,
  },
];

export const emerald = new URL(
  "./assets/images/21-2-minecraft-emerald-png_64x64.ico",
  import.meta.url
).href;

export default GOODS;
