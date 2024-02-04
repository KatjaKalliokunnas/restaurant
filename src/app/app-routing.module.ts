import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

// Routes-taulukko sisältää reittiolioita. Ensimmäinen reittiolio
// tekee uudelleenohjauksen juuriosoitteesta eka-reittiin.
// Ensimmäinen varsinainen reitti on osoitteessa localhost:4200/eka
const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
