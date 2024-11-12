import express from "express";
import {
  getTrendingTvs,
  getSimilarTvs,
  getTvsDetails,
  getTvsTrailers,
  getTvsByCategory,
} from "../controllers/tvShows.controller.js";
const router = express.Router();

router.get("/trending", getTrendingTvs);
router.get("/:id/similar", getSimilarTvs);
router.get("/:id/details", getTvsDetails);
router.get("/:id/trailer", getTvsTrailers);
router.get("/:category", getTvsByCategory);

export default router;
