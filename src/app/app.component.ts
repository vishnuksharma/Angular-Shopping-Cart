import {Component, OnChanges, DoCheck} from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  isShoppingCartVisible = false;
  shoppingCartList: Product[] = [];
  cartCount: number = this.shoppingCartList.length;

  ngDoCheck() {
    this.cartCount = this.shoppingCartList.length;  
  }

  /**
   * mount and unmount the product and shopping cart component
   */
  openShoppingCart() {
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }

  /**
   * @func : getShoppingCartList will call when click "Add to Cart" button
   * @param addToCart : Product object Added to the cart
   */
  getShoppingCartList(addToCart: Product) {
    this.shoppingCartList.push(addToCart)
    // console.log(this.shoppingCartList, 'shoppingCartList');
  }

  /**
   * @onEmitRemoveCartItem : emit the latest cart item product list 
   */
  onEmitRemoveCartItem(shoppingCartRemainingList: Product[]) {
    this.shoppingCartList = shoppingCartRemainingList;
    
  }
}
