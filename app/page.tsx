import RoomsList from "@/components/RoomsList/RoomsList";

export default function Home() {
  return (
    <main className="overflow-hidden p-4">
      <h1 className="mb-4 font-bold text-xl">Select your room</h1>
      <RoomsList />
    </main>
  );
}
