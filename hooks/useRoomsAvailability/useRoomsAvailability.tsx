import { RoomAvailability } from "@/components";
import { type GetRoomsAvailabilityParams } from "./types";

import axios from "axios";
import { useEffect, useState } from "react";

export function useRoomsAvailability({ id }: GetRoomsAvailabilityParams) {
  const [data, setData] = useState<RoomAvailability>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dcontent.inviacdn.net/shared/dev/test-api/room/${id}`)
      .then(
        (response) => {
          setData(response.data);
        },
        (error) => {
          setError(error);
        }
      );
  }, [id]);
  return { data, error, loading };
}
