import { DelReference } from './../../shared/actions/panier.action';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Reference } from 'src/shared/models/reference';
import { PanierState } from 'src/shared/states/panier-state';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  nbElementPanier: any;
  // panierElements$!: Observable<Reference>;

  @Select(PanierState.getReferences) panierElements$!: Observable<Reference>;

  constructor(private articleService: ArticleService,
    private store: Store) { }

  ngOnInit(): void {
    this.store.select(state => state.panier.panier.length).subscribe(l => this.nbElementPanier = l);
    // this.nbElementPanier = this.store.select(PanierState.getNbReference);
    // console.log(this.nbElementPanier);
    this.panierElements$ = this.store.select(state => state.panier.panier);
  }

  delReference(ref: string) {
    this.store.dispatch(new DelReference(ref));
  }
}
