import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  cartEmpty: boolean;

  showCart(): void {
    this.shouldShowCart = true;
  }

  // cartEmpty(): Observable<boolean> {
  //   console.log('here')
  //   return this.cartService.getCartItems().pipe( tap(x => console.log(x)),map(cartItems => !cartItems.length),);
  //   // return true;
  // }

  onCartChange(isCartEmpty: boolean) {
    this.cartEmpty = isCartEmpty;
  }

  hideCart(): void {
    this.shouldShowCart = false;
  }
}
