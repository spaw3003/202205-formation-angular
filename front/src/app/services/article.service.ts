import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

const CLE_STORAGE_ARTICLES = 'articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  getArticles() {
    const listeArticles = localStorage.getItem(CLE_STORAGE_ARTICLES);
    if (listeArticles === null) {
      return [
        { name: 'Marteau', price: 2.99, qty: 15 },
        { name: 'Faucille', price: 1.99, qty: 12 },
        { name: 'Scie', price: 3.99, qty: 15 },
        { name: 'Perceuse', price: 9.99, qty: 18 },
      ];
    }

    return JSON.parse(listeArticles);
  }

  async add(article: Article) {
    this.articles.push(article);
  }

  save() {
    localStorage.setItem(CLE_STORAGE_ARTICLES, JSON.stringify(this.articles));
  }
}
