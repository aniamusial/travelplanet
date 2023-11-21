import axios from "axios";
import { useEffect, useState } from "react";
import { type Room } from "../../components/types";

export function useRooms() {
  const [data, setData] = useState<Room[]>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://dcontent.inviacdn.net/shared/dev/test-api/rooms").then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        setError(error);
      }
    );
  }, []);
  return { data, error, loading };
}
