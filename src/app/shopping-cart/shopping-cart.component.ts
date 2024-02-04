import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Menu } from '../menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  content!: Menu[];
  address!: string;
  totalPrice: number = 0;
  valid: boolean = false;
  isEmpty!: boolean;

  constructor(
    private restaurantService: RestaurantService,
    private orderService: OrderService,
    private dialog: MatDialog,
    private router: Router
  ) {
    // tarkistaa onko ostoskorissa tuotteita ja sen perusteellä näyttää joko sisällön tai ilmoituksen että ostoskori on tyhjä
    if (this.restaurantService.products.length === 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  ngOnInit() {
    // hakee tilattujen annosten tiedot localStoragesta
    this.content = this.restaurantService.getPortions();
    this.totalPrice = this.orderService.countPrice(this.content);
  }

  clearShoppingCart() {
    this.restaurantService.clearProducts();
    this.isEmpty = false;
  }
  openDialog() {
    // angular materialsin dialog komponentti joka avaa dialogin.
    // ensimmäinen argumentti on komponentti, jonka avaa ja toinen sis. välitettävät tiedot

    const dialogRef = this.dialog.open(DialogComponent, {
      data: [{ order: this.content, address: this.address }],
    });

    dialogRef.afterClosed().subscribe(() => {
      this.restaurantService.clearProducts();
      this.router.navigate(['/']);
    });
  }

  onSubmit(formData: any, isFormValid: boolean | null) {
    if (isFormValid) {
      this.address = formData;
      this.openDialog();
    } else {
      this.valid = true;
    }
  }
}
