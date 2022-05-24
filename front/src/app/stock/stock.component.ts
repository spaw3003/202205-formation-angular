import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import {
  faRotateRight,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  faRotateRight = faRotateRight;
  faTrash = faTrash;
  faPlus = faPlus;

  articles: Article[] = [
    { name: 'Marteau', price: 2.99, qty: 15 },
    { name: 'Faucille', price: 1.99, qty: 12 },
    { name: 'Scie', price: 3.99, qty: 15 },
    { name: 'Perceuse', price: 9.99, qty: 18 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
