import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';
import { ProductCart } from './product-cart';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private apiServer = "http://laravel.test:81/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(productCart): Observable<ProductCart> {
    return this.httpClient.post<ProductCart>(this.apiServer + '/productCars/', JSON.stringify(productCart), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id): Observable<ProductCart> {
    return this.httpClient.get<ProductCart>(this.apiServer + '/productCars/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<ProductCart[]> {
    return this.httpClient.get<ProductCart[]>(this.apiServer + '/productCars/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, productCart): Observable<ProductCart> {
    return this.httpClient.put<ProductCart>(this.apiServer + '/productCars/' + id, JSON.stringify(productCart), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateStatus(id, productCart): Observable<ProductCart> {
    return this.httpClient.put<ProductCart>(this.apiServer + '/productCars/updateStatus/' + id, JSON.stringify(productCart), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<ProductCart>(this.apiServer + '/productCars/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
