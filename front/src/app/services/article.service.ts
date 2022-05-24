import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

const CLE_STORAGE_ARTICLES = 'articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  async add(article: Article) {
    this.articles.push(article);
  }

  getArticles() {
    const listeArticles = localStorage.getItem(CLE_STORAGE_ARTICLES);
    if (listeArticles === null) {
      return [];
    }

    return JSON.parse(listeArticles);
  }

  async refresh() {
    this.articles = this.getArticles();
  }

  async delete(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter(
      (article) => !selectedArticles.has(article)
    );
    this.save();
  }

  async save() {
    localStorage.setItem(CLE_STORAGE_ARTICLES, JSON.stringify(this.articles));
  }
}
