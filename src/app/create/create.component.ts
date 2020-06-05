import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;

  ngOnInit() {
      this.productForm = this.fb.group({
      nombre: [''],
      sku: [''],
      descripcion: ['']
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public productService: ProductService
  ){ }
  submitForm() {
    this.productService.create(this.productForm.value).subscribe(res => {
      console.log('Producto creado exitosamente!');
      this.router.navigateByUrl('home');
    })
  }
}
