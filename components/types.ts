export type Room = {
  id: number;
  name: string;
  price: Price;
};

export type Price = {
  value: number;
  currencyCode: string;
};
