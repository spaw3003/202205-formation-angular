import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import {
  faRotateRight,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRotateRight = faRotateRight;
  faTrash = faTrash;
  faPlus = faPlus;

  selectedArticles = new Set<Article>();
  isRefreshing = false;

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.refresh();
  }

  async refresh() {
    try {
      this.isRefreshing = true;
      await this.articleService.refresh();
      this.selectedArticles.clear();
    } catch (err) {
      console.log('erreur : ', err);
    } finally {
      this.isRefreshing = false;
    }
  }

  async delete() {
    await this.articleService.delete(this.selectedArticles);
    this.selectedArticles.clear();
  }

  toggle(article: Article) {
    if (this.selectedArticles.has(article)) {
      this.selectedArticles.delete(article);
    } else {
      this.selectedArticles.add(article);
    }
  }
}
