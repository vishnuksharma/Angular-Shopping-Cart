import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;
  @Output() emitProduct = new EventEmitter<Product>();
  
  constructor() {
  }

  /**
   * emiting the product information to parent component
   */
  addToCart() {
    this.emitProduct.emit(this.product);
  }
}
