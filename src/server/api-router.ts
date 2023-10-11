import express from "express";
import cors from "cors";

import testdata from "./testdata.json";

const contests = testdata.map((category) => {
  const { id, categoryName, contestName } = category;
  return {
    id,
    categoryName,
    contestName,
  };
});

const router = express.Router();

router.use(cors());

router.get("/contests", (req, res) => {
  res.json(contests);
});

export default router;
