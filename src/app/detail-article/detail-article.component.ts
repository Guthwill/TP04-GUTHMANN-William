import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../service/article.service'

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})

export class DetailArticleComponent implements OnInit {

  // name: string = "";
  // price: number = 0;
  name = new String();
  price = new Number();

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const ref = this.route.snapshot.params['ref'];
    this.name = String(this.articleService.getArticleByRef(ref)?.name);
    this.price = Number(this.articleService.getArticleByRef(ref)?.price);
  }
}
