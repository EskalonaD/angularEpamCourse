import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cartService: CartService) { }
  title = 'shop';

  shouldShowCart: boolean;

  showCart(): void {
    this.shouldShowCart = true;
  }

  get cartEmpty() {
    return !this.cartService.getCartItems().length;
  }

  hideCart(): void {
    this.shouldShowCart = false;
  }
}
