import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  faPlus = faPlus;
  faSpinner = faSpinner;

  isAdding = false;

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    qty: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  async submit() {
    this.isAdding = true;

    try {
      const article = this.formGroup.value as Article;
      await this.articleService.add(article);
      await this.articleService.save();
      this.router.navigate(['..'], { relativeTo: this.route });
    } catch (err) {
      console.log('erreur : ', err);
    } finally {
      this.isAdding = false;
    }
  }

  ngOnInit(): void {}
}
