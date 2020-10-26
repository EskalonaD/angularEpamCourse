import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  title = 'shop';
  shouldShowCart: boolean;
  cartEmpty: boolean;

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = this.title;
  }

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
