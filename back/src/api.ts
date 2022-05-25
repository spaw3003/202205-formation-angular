import { generateKey } from "crypto";
import { Router, json } from "express";
import { Article } from "./interfaces/article";
import { v4 as uuidv4 } from "uuid";

const app = Router();

let articles: Article[] = [
  { id: "0", name: "Marteau", price: 2.99, qty: 15 },
  { id: "1", name: "Faucille", price: 1.99, qty: 12 },
  { id: "2", name: "Scie", price: 3.99, qty: 15 },
  { id: "3", name: "Pelle", price: 24.99, qty: 18 },
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
  try {
    const article = req.body as Article;
    article.id = uuidv4();
    articles.push(article);
    res.status(201).end();
  } catch (err) {
    console.log("erreur : ", err);
    res.status(500).end();
  }
});

app.delete("/articles", (req, res) => {
  try {
    const idArticles = req.body as string[];

    articles = articles.filter((article) => !idArticles.includes(article.id));
    res.status(204).end();
  } catch (err) {
    console.log("erreur : ", err);
    res.status(500).end();
  }
});

export const api = app;
