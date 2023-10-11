import { ContestEntry } from "./app";

const ContestPreview = ({ contest }: { contest: ContestEntry }) => {
  return (
    <div key={contest.id} className="contest-preview">
      <div className="category">{contest.categoryName}</div>
      <div className="contest-preview">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
