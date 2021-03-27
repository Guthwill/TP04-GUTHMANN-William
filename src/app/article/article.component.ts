import { ArticleService } from './../service/article.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() idArticle!: number;
  @Input() articleName!: string;
  @Input() articlePrice!: number;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

}
