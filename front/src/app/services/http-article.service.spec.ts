import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Article } from '../interfaces/article';

import { HttpArticleService, URL_ARTICLE } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be refreshed', async () => {
    const call = service.refresh();
    const req = http.expectOne(URL_ARTICLE);
    expect(req.request.method).toBe('GET');
    const articles: Article[] = [];
    req.flush(articles);
    await call;
    expect(service.articles).toEqual(articles);
  });
});
