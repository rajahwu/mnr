import Header from "./header";
import ContestList from "./ContestList";

export interface ContestEntry {
  categoryName: string;
  contestName: string;
  id: string;
}

export interface ContestEntryObj {
  contests: ContestEntry[];
}

export default function App({ initialData }: { initialData: ContestEntryObj }) {
  return (
    <div className="container">
      <Header message="Naming Contest" />
      <ContestList initialContests={initialData.contests} />
    </div>
  );
}
