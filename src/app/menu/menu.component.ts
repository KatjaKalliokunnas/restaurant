import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  restaurant!: Restaurant;
  totalPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.getRestaurant();
  }

  // hakee ravintolan tiedot valetietokannasta ja asettaa ne restaurant muuttujaan, jonka käy templaatissa läpi
  getRestaurant(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.restaurantService
      .getRestaurant(id)
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
  addFood(portion: any) {
    // lisää annoksen ostoskoriin käyttämällä servicen addToCart-metodia
    this.restaurantService.addToCart(portion);
    this.totalPrice = portion.hinta + this.totalPrice;
  }
  toShoppingCart() {
    this.router.navigate(['/shoppingCart']);
  }
}
