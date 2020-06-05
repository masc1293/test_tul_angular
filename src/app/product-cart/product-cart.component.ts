import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductCartService } from '../product-cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Product } from '../product';
import { ProductCart } from '../product-cart';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  id: number;
  producto: Product;
  productCart: ProductCart;
  productCartForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public productService: ProductService,
    public productCartService: ProductCartService
  ){ 
    this.id = route.snapshot.params.productId;
  }
  
  ngOnInit() {
    this.productService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.producto = data;
      }, error => console.log(error));

      this.productCartForm = this.fb.group({
        product_id: [''],
        cart_id: ['1'],
        quantity: ['']
      })
  }

  onSubmit() {
    this.productCartService.create(this.productCartForm.value).subscribe(res => {
    console.log('Producto agregado al carrito exitosamente!');
      this.router.navigateByUrl('home');
    })
  }
}
