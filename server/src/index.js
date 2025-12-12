const express = require('express');
const app = express();
const articlesRoutes = require("./routes/articlesRoutes");
const port = 3004;

app.use((req, resp, next) => {
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  resp.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", articlesRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
