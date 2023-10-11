import axios from "axios";
import { API_SERVER_URL } from "../public-config";
import { useEffect, useState } from "react";

import { type ContestEntry } from "./app";
import ContestPreview from "./ContestPreview";
import { fetchContest } from "../api-client";

const ContestList = ({ initialContests }: { initialContests: ContestEntry[] }) => {
  const [contests, setContest] = useState(initialContests)

  useEffect(() => {
   fetchContest().then(data => setContest(data))
  }, []);

  return (
    <div className="contest-list">
      {contests.map((contest: ContestEntry, i: number) => (
        <ContestPreview key={i} contest={contest} />
      ))}
    </div>
  );
};

export default ContestList;
