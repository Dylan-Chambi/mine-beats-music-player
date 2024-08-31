import SearchInput from "@/components/SearchInput";
import { getSongByTitle } from "../actions/deezerSongs";
import Header from "@/components/Header";
import { SearchContent } from "./components/SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

export default async function Search({ searchParams }: SearchProps) {
  const deezerTracks = await getSongByTitle(searchParams.title || "");
  return (
    <main className="h-full flex-1 overflow-y-auto">
      <div className="bg-background h-full overflow-hidden overflow-y-auto">
        <Header className="from-bg-neutral-900">
          <div className="mb-2 flex flex-col gap-y-6">
            <h1 className="text-white text-xl font-semibold">Search</h1>
            <SearchInput />
          </div>
        </Header>
        <SearchContent deezerTracks={deezerTracks} />
      </div>
    </main>
  );
}
