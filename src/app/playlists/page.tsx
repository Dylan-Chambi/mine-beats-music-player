import Header from "@/components/Header";
import { useUserServer } from "@/hooks/useUserServer";
import { redirect } from "next/navigation";

export default async function Playlist() {
  const { user } = await useUserServer();

  if (!user) {
    redirect("/?auth_modal=true");
  }

  return (
    <main className="h-full flex-1 overflow-y-auto">
      <div className="bg-background h-full overflow-hidden overflow-y-auto">
        <Header className="from-bg-neutral-900">
          <div className="mb-2 flex flex-col gap-y-6">
            <h1 className="text-white text-xl font-semibold">Playlists</h1>
          </div>
        </Header>
        <div
          className="bg-background rounded-lg w-full overflow-y-auto"
          style={{ height: "calc(100vh - 15rem)" }}
        >
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-secondary">Coming Soon...</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
