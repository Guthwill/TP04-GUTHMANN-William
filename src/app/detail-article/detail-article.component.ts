import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})

export class DetailArticleComponent implements OnInit {

  name: string = 'Article';
  price: number = 0;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['ref'];
    // this.name = this.articleService.getArticleById(ref).name;
    // this.price = this.articleService.getArticleById(ref).price;
  }

}