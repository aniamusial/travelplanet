export type Room = {
  id: number;
  name: string;
  price: Price;
};

export interface RoomAvailability extends Room {
  availabilityStatus: string;
}

export type Price = {
  value: number;
  currencyCode: string;
};
