import { Router } from "express";

const app = Router();

app.get("/date", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.get("/articles", (req, res) => {
  res.json([
    { name: "Marteau", price: 2.99, qty: 15 },
    { name: "Faucille", price: 1.99, qty: 12 },
    { name: "Scie", price: 3.99, qty: 15 },
    { name: "Pelle", price: 24.99, qty: 18 },
  ]);
});

export const api = app;
