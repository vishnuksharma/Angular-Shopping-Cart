import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: Product;
  @Output() emitRemoveItem = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * @func: this will call when click on remove cart button 
   * @param cartItem : removed item when user click on remove item button
   */
  removeItem(cartItem: Product) {
    this.emitRemoveItem.emit(cartItem)
  }

}
