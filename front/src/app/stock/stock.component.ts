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

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  async refresh() {
    await this.articleService.refresh();
  }

  toggle(article: Article) {
    if (this.selectedArticles.has(article)) {
      this.selectedArticles.delete(article);
      return;
    } else {
      this.selectedArticles.add(article);
    }
  }
}
