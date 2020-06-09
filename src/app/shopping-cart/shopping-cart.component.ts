import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { listItemAnimation, fadeAnimation } from '../animation/fade.amimation';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [listItemAnimation, fadeAnimation]
})
export class ShoppingCartComponent implements OnInit {
  @Input('shoppingCartList') cartItemList : Product[] = [];
  @Output('shoppingCartList') shoppingCartRemainingList = new EventEmitter<Product[]>();
  groupByProductName: Product[] = [];
  totalAmount: number = 0;
  constructor() { }

  ngOnInit() {
    /**
     * Group the cart item by item name and calculate the line price
     */
    this.groupByProductName = [...this.cartItemList.reduce( (mp, item) => {
      if (!mp.has(item.id)) {
        mp.set(item.id, { ...item, qty: 1, linePrice: item.price });
      } else {
        mp.get(item.id).qty++;
        mp.get(item.id).linePrice = mp.get(item.id).price * mp.get(item.id).qty;
      }
      return mp;
    }, new Map).values()];

    /**
     * calculate the total amount of the cart item.
     */
    this.totalAmount = this.calculateTotalAmount();
  }

  /**
   * @function: @onEmitRemoveItem with call when emit the value from cart-item on click remove item in the cart. 
   * @param removedItem : Product id object getting when user remove item from the cart list
   */
  onEmitRemoveItem(removedItem: Product) {
    const { id } = removedItem;
    const taskTobeDeleted = this.groupByProductName.indexOf(removedItem);
    this.groupByProductName.splice(taskTobeDeleted, 1);

    this.removeCartListItem(id);
    this.totalAmount = this.calculateTotalAmount();
  }

  /**
   * remove item from the cart list
   */
  removeCartListItem(removeItemId: number) {
    this.cartItemList = this.cartItemList.filter(item => item.id !== removeItemId);
    this.shoppingCartRemainingList.emit(this.cartItemList);
  }
  
  /**
   * calculate the total amount of the cart item.
   */
  calculateTotalAmount() {
    const totalAmount =  this.cartItemList.reduce((sum, item) => sum + item.price, 0);
    return parseFloat(totalAmount.toFixed(2));
  }

}
