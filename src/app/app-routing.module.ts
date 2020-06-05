import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { CartComponent } from './cart/cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:productId', component: UpdateComponent },
  { path: 'productCart/:productId', component: ProductCartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'updateCart/:productId', component: UpdateCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
