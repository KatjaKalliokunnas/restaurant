import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  title = 'Tilaa kotiin ravintolasta';
  constructor(private router: Router) {}
  toShoppingCart() {
    this.router.navigate(['./shoppingCart']);
  }
}
