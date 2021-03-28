import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddReference } from '../../shared/actions/panier.action';

@Component({
  selector: 'app-btn-add-panier',
  templateUrl: './btn-add-panier.component.html',
  styleUrls: ['./btn-add-panier.component.css']
})
export class BtnAddPanierComponent implements OnInit {

  // @Input() articles$!: any[];
  @Input() articleRef!: string;
  @Input() articleName!: string;
  @Input() articlePrice!: number;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addPanier(ref: string, name: string, price: number) {
    this.store.dispatch(new AddReference({'ref': ref, 'name': name, 'price': price}))
    console.log(ref);
  }
}
