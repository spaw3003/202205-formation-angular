import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
  }

  override async refresh() {
    this.http.get<Article[]>('http://localhost:3000/api/articles').subscribe({
      next: (articles) => {
        console.log('articles : ', articles);
        this.articles = articles;
        this.save();
      },
      complete: () => {
        console.log('observable complete');
      },
      error: (err) => {
        console.log('erreur : ', err);
      },
    });
  }
}
