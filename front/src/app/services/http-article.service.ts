import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';
import { delay, lastValueFrom } from 'rxjs';

const URL_ARTICLE = 'http://localhost:3000/api/articles';

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
    super.add(article);

    await lastValueFrom(
      this.http.post<void>(URL_ARTICLE, article).pipe(delay(2000))
    );
  }
}
