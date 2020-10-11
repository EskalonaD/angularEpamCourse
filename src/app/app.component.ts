import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  shouldShowCart: boolean;
  cartEmpty: boolean;

  showCart(): void {
    this.shouldShowCart = true;
  }

  onCartChange(isCartEmpty: boolean): void {
    this.cartEmpty = isCartEmpty;
  }

  hideCart(): void {
    this.shouldShowCart = false;
  }
}
