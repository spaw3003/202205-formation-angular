import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url : ", req.url);
  next();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.get("/api/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});