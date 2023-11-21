import { ChangeEvent } from "react";
import { RoomAvailability, type Room } from "../types";

export interface RoomListItemProps {
  room: Room;
  value: string;
  disabled?: boolean;
  displayAvailability?: boolean;
  onAvailabilityChange: (status: string) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
