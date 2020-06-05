import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductCartService } from '../product-cart.service';
import { Router } from '@angular/router';

import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  productCart: ProductCartService[] = []; 
  name = "Nombre del producto";
  sku = "SKU";
  description = "Descripción";
  action = "Acciones";
  created = "Crear nuevo producto";
  add = "Agregar al carrito";
  modify = "Modificar";
  deleted = "Eliminar";
  productoList = "Lista de productos";
  cart = "Ver carrito";

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAll();
    
    this.reloadData();
  }
  
  getAll() {
    this.productService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    });
  }

  reloadData() {
    this.getAll();
  }

  deleteProduct(id: number) {
    this.productService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
