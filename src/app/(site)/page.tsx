import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="h-full flex-1 overflow-y-auto">
      <div className="bg-background h-full overflow-hidden overflow-y-auto">
        <Header>
          Hello
        </Header>
      </div>
    </main>
  );
}
