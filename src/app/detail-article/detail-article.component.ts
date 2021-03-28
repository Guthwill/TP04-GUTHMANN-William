import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service'

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})

export class DetailArticleComponent implements OnInit {

  name: string = "";
  // price: number = 0;
  price = new Number()

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const ref: string = this.route.snapshot.params['ref'];
    this.name = String(this.articleService.getArticleById(ref)?.name);
    this.price = Number(this.articleService.getArticleById(ref)?.price);
  }
}
