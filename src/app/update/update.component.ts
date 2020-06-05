import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  producto: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public productService: ProductService
  ){ 
    this.id = route.snapshot.params.productId;
  }
  
  ngOnInit() {
    this.productService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.producto = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.productService.update(this.id, this.producto).subscribe(res => {
      console.log('Producto actualizado exitosamente!');
      this.router.navigateByUrl('home');
    })
  }
}
