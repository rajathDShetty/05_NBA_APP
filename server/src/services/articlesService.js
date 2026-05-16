const connectDB = require("./connection");
let dbPromise = connectDB(); 

async function getArticles(start, end) {
  const db = await dbPromise;
  const collection = db.collection("articles");
  if (start === undefined || end === undefined) {
    const allArticles = await collection.find().toArray();
    return (allArticles);
  }
  const skip = parseInt(start) || 0;
  const limit = (parseInt(end) - skip) || 10;

  const pagedArticles = await collection
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  return (pagedArticles);
}

async function getTeams(start, end) {
  const db = await dbPromise;
  const collection = db.collection("teams");
  if (start === undefined || end === undefined) {
    const allTeams = await collection.find().toArray();
    return (allTeams);
  }
  const skip = parseInt(start) || 0;
  const limit = (parseInt(end) - skip) || 10;

  const pagedTeams = await collection
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  return (pagedTeams);
}

async function getVideos(start, end) {
  const db = await dbPromise;
  const collection = db.collection("videos");
  if (start === undefined || end === undefined) {
    const allVideos = await collection.find().toArray();
    return (allVideos);
  }
  const skip = parseInt(start) || 0;
  const limit = (parseInt(end) - skip) || 10;

  const pagedVideos = await collection
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  return (pagedVideos);
}

async function getArticleById(id) {
  const db = await dbPromise;
  const article = await db.collection("articles").findOne({ id });
  return article;
}

async function getTeamsById(id) {
  const db = await dbPromise;
  const team = await db.collection("teams").findOne({ id });
  return team;
}

async function getVideosById(id) {
  const db = await dbPromise;
  const video = await db.collection("videos").findOne({ id });
  return video;
}

module.exports = { getArticles, getArticleById ,getTeams, getTeamsById, getVideos, getVideosById};
