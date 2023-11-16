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

// NOTE: This and the rooms list is mocked, but wihtout the CORS issue I would use React Query and fetch via url something like.
// const fetchRoomsAvailability = async ({ id }: GetRoomsAvailabilityParams) => {
//   const response = await fetch(
//     `https://dcontent.inviacdn.net/shared/dev/test-api/room/${id}/`
//   );
//   return response.json();
// };

// /**
//  * Hook for getting rooms availability data
//  * @param {string} id Room id
//  * @param {GetRoomsAvailabilityParams} props parameters
//  */
// export function useRoomsAvailability({ id }: GetRoomsAvailabilityParams) {
//   return useQuery(roomAvailabilityKey(id), fetchRoomsAvailability, {
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//   });
// }

export function useRoomsAvailability({ id }: GetRoomsAvailabilityParams) {
  return roomsAvailability[id - 1];
}
