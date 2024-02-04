import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  products: Restaurant[] = [];
  // url in-memory-webapiin, jossa 'api' on lähde johon haku tehdään ja 'restaurants' on objekti joka haetaan kannasta
  private restUrl = 'api/restaurants';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient, public orderService: OrderService) {}

  // hakee ravintolat "serveriltä"
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restUrl);
  }
  // hakee ravintolan id:n perusteella
  getRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.restUrl}/${id}`;
    return this.http.get<Restaurant>(url);
  }

  getProduct() {
    return this.products;
  }
  // tallentaa tilauksen localStorageen
  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.products));
  }
  // lisää tilauksen ostoskoriin
  addToCart(addedProduct: any) {
    this.products.push(addedProduct);
    this.saveCart();
  }
  // hakee tuotteet localStoragesta
  public getPortions() {
    // jos itemiä ei ole localStoragessa, palautetaan tyhjä olio
    return JSON.parse(localStorage.getItem('cartItems') || '{}');
  }
  // tyhjentää ostoskorin eli localStoragen
  clearProducts() {
    localStorage.clear();
    this.orderService.totalPrice = 0;
    this.products = [];
  }
}
