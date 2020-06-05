import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Router } from '@angular/router';

import { ProductCart } from '../product-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productCart: ProductCart[] = []; 

  constructor(public productCartService: ProductCartService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
    this.reloadData();
  }

  getAll() {
     this.productCartService.getAll().subscribe((data: ProductCart[])=>{
      console.log(data);
      this.productCart = data;
    });
  }

  reloadData() {
    this.getAll();
  }

  deleteProduct(id: number) {
    this.productCartService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  checkoutCart(id: number) {
    this.productCartService.updateStatus(id, this.productCart).subscribe(res => {
      console.log('Estatus del producto actualizado exitosamente!');
      this.reloadData();
    })
  }
}
