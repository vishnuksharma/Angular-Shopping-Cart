import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import { fadeAnimation, listItemAnimation } from '../animation/fade.amimation';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [fadeAnimation]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  @Output('shoppingCartList') emitShoppingCartList = new EventEmitter<Product>();

  constructor(private productsService: ProductService) {
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }

  /**
   * @func : call when click on "add to cart"
   * @param product : Object with product information
   */
  onProductAdd(product: Product) {
    this.emitShoppingCartList.emit(product)
  }


}
