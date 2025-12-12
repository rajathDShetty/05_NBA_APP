const express = require("express");
const router = express.Router();

const {
  getArticles,
  getArticleById,
  getTeams,
  getVideos
} = require("../services/articlesService");

router.get("/articles", async (req, res) => {
  const data = await getArticles(req.query._start, req.query._end);
  res.json(data);
});

router.get("/articles/:id", async (req, res) => {
  const data = await getArticleById(parseInt(req.params.id));
  res.json(data);
});

router.get("/teams", async (req, res) => {
  const data = await getTeams(req.query._start, req.query._end);
  res.json(data);
});

router.get("/videos", async (req, res) => {
  const data = await getVideos(req.query._start, req.query._end);
  res.json(data);
});

module.exports = router;
