"use client";
import { useRoomsAvailability } from "@/hooks";
import { type RoomListItemProps } from "./types";
import { forwardRef, useEffect } from "react";

export const RoomListItem = forwardRef<HTMLInputElement, RoomListItemProps>(
  (
    {
      room,
      value,
      disabled,
      displayAvailability,
      onAvailabilityChange,
      ...attributes
    },
    ref
  ) => {
    const roomAvailability = useRoomsAvailability({ id: room.id });
    const isDiscountAvailable = () => {
      return (
        typeof roomAvailability?.price &&
        roomAvailability?.price?.value !== room.price.value
      );
    };

    useEffect(() => {
      displayAvailability &&
        onAvailabilityChange(roomAvailability.availabilityStatus);
    }, [roomAvailability, displayAvailability, onAvailabilityChange]);

    return (
      <label className="relative">
        <input
          ref={ref}
          disabled={disabled}
          type="radio"
          name="room"
          value={value}
          className="peer sr-only"
          {...attributes}
        />
        <div className="h-full flex flex-col items-center justify-center py-7 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 active:border-primary-300 active:bg-primary-200 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale">
          <p className="text-center font-bold">{room.name}</p>
          <p>
            {displayAvailability ? (
              isDiscountAvailable() ? (
                <>
                  <span className="line-through">
                    {room.price?.value} {room.price.currencyCode}
                  </span>
                  <span className="text-green-500">
                    {roomAvailability.price?.value}{" "}
                    {roomAvailability.price?.currencyCode}
                  </span>
                </>
              ) : (
                <span>
                  {room.price?.value} {room.price.currencyCode}
                </span>
              )
            ) : (
              <span>
                {room.price?.value} {room.price.currencyCode}
              </span>
            )}
          </p>
          {displayAvailability && (
            <p className="uppercase font-medium text-sm text-purple-500 py-2">
              {roomAvailability.availabilityStatus}
            </p>
          )}
        </div>
      </label>
    );
  }
);

RoomListItem.displayName = "RoomListItem";
