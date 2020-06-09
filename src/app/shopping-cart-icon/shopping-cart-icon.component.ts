import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'shopping-cart-icon',
  templateUrl: './shopping-cart-icon.component.html',
  styleUrls: ['./shopping-cart-icon.component.css'],
})
export class ShoppingCartIconComponent implements OnInit {
  @Input() cartCount: number;
  constructor() { }

  ngOnInit() {
  }

}
