import roomsAvailability1 from "../../mocks/rooms_availability_1.json";
import roomsAvailability2 from "../../mocks/rooms_availability_2.json";
import roomsAvailability3 from "../../mocks/rooms_availability_3.json";
import roomsAvailability4 from "../../mocks/rooms_availability_4.json";
import { type GetRoomsAvailabilityParams } from "./types";

const roomsAvailability = [
  roomsAvailability1,
  roomsAvailability2,
  roomsAvailability3,
  roomsAvailability4,
];

export function useRoomsAvailability({ id }: GetRoomsAvailabilityParams) {
  return roomsAvailability[id - 1];
}
