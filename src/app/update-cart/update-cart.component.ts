import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCart } from '../product-cart';

@Component({
  selector: 'app-update-cart',
  templateUrl: './update-cart.component.html',
  styleUrls: ['./update-cart.component.css']
})
export class UpdateCartComponent implements OnInit {

  id: number;
  car: ProductCart;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public productCartService: ProductCartService
  ){ 
    this.id = route.snapshot.params.productId;
  }

  ngOnInit() {
    this.productCartService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.productCartService.update(this.id, this.car).subscribe(res => {
      console.log('Producto del carrito actualizado exitosamente!');
      this.router.navigateByUrl('cart');
    })
  }

}
