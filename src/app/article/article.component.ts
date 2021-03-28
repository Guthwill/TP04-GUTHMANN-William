import { ArticleService } from './../service/article.service';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // @Input() articles$!: any[];
  @Input() articleRef!: string;
  @Input() articleName!: string;
  @Input() articlePrice!: number;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }
}
