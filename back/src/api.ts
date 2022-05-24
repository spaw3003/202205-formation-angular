import { Router, json } from "express";
import { Article } from "./interfaces/article";

const app = Router();

const articles: Article[] = [
  { name: "Marteau", price: 2.99, qty: 15 },
  { name: "Faucille", price: 1.99, qty: 12 },
  { name: "Scie", price: 3.99, qty: 15 },
  { name: "Pelle", price: 24.99, qty: 18 },
];

app.use(json());

app.get("/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", (req, res) => {
  const article = req.body;
  articles.push(article);
  res.status(201).end();
});

export const api = app;
