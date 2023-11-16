"use client";
import { ChangeEvent, SyntheticEvent, useMemo, useState } from "react";
import { type Room } from "../types";
import { useRooms } from "../../hooks";
import { RoomListItem } from "../RoomListItem";

const RoomsList = () => {
  const rooms = useRooms();
  const [selectedRoom, setSelectedRoom] = useState<string>();
  const [availabilityStatus, setAvailabilityStatus] = useState<string>("");
  const [isAvailabilityChecked, setIsAvailbilityChecked] =
    useState<boolean>(false);

  const sortRooms = (rooms: Room[]): Room[] => {
    return rooms.sort((a, b) => {
      return a.price?.value - b.price?.value;
    });
  };

  const handleChangeRoom = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAvailbilityChecked(false);
    setSelectedRoom(event.target.value);
  };

  const onSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    console.log("Book button clicked with", event);
  };

  useMemo(() => {
    sortRooms(rooms);
  }, [rooms]);

  return (
    <form>
      <fieldset>
        <div className="grid grid-cols-4 gap-4">
          {rooms.map((room) => (
            <RoomListItem
              key={room.id}
              value={room.name}
              room={room}
              displayAvailability={
                isAvailabilityChecked && room.name === selectedRoom
              }
              onAvailabilityChange={(status: string) =>
                setAvailabilityStatus(status)
              }
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChangeRoom(event)
              }
            />
          ))}
        </div>
      </fieldset>
      <hr className="my-6" />
      <div className="flex">
        <button
          type="button"
          onClick={() => setIsAvailbilityChecked(true)}
          className="bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-500 font-medium p-4 rounded-md mr-2"
        >
          Check for availability
        </button>
        <button
          type="submit"
          disabled={isAvailabilityChecked && availabilityStatus !== "available"}
          className="bg-orange-500 hover:bg-orange-700 active:bg-orange-700 text-white font-medium p-4 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={onSubmit}
        >
          Book
        </button>
      </div>
    </form>
  );
};

export default RoomsList;
