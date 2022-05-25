import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';
import { delay, lastValueFrom } from 'rxjs';

export const URL_ARTICLE = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
  }

  override async refresh() {
    const articles = await lastValueFrom(
      this.http.get<Article[]>(URL_ARTICLE).pipe(delay(2000))
    );
    console.log('articles : ', articles);
    this.articles = articles;
    this.save();
  }

  override async add(article: Article): Promise<void> {
    await super.add(article);

    await lastValueFrom(
      this.http.post<void>(URL_ARTICLE, article).pipe(delay(2000))
    );
  }

  override async delete(selectedArticles: Set<Article>): Promise<void> {
    await super.delete(selectedArticles);

    const idArticles = [...selectedArticles].map((article) => article.id);

    await lastValueFrom(
      this.http
        .delete(URL_ARTICLE, {
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(idArticles),
        })
        .pipe(delay(1500))
    );
  }
}
