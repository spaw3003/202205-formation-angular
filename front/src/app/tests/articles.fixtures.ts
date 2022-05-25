import { Article } from '../interfaces/article';

export const articles: Article[] = [
  { id: '0', name: 'Marteau', price: 2.99, qty: 15 },
  { id: '1', name: 'Faucille', price: 1.99, qty: 12 },
  { id: '2', name: 'Scie', price: 3.99, qty: 15 },
  { id: '3', name: 'Pelle', price: 24.99, qty: 18 },
];

export const article1: Article = {
  id: '4',
  name: 'Clef anglaise',
  price: 14.99,
  qty: 18,
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
