import Header from "@/components/Header";
import { getSongs } from "../actions/deezerSongs";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <main className="h-full flex-1 overflow-y-auto">
      <div className="bg-background h-full overflow-hidden overflow-y-auto">
        <Header>
          <PageContent songs={songs} />
        </Header>
      </div>
    </main>
  );
}
