import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  // käyttää restaurant-servisen getRestaurants-metodia ja näyttää ravintolat
  getRestaurants(): void {
    this.restaurantService
      .getRestaurants()
      .subscribe((restaurants) => (this.restaurants = restaurants));
  }
}
