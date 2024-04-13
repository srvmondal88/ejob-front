import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  key = (sessionStorage.getItem('userdetails')) ? JSON.parse(sessionStorage.getItem('userdetails')) : '';
  private api_key = this.key.token;
  private apiURL = "http://127.0.0.1:8000/api/user/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.api_key}`
    })
  }

  constructor(private httpClient: HttpClient) { }

  getProducts(data:any):Observable<any>
  {
     return this.httpClient.post(`${this.apiURL}get_all_products`,data,this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
    )
  }

  getcategory():Observable<any>
  {
     return this.httpClient.get(`${this.apiURL}categories`,this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
    )
  }

  addToCart(data:any):Observable<any>
  {
      return this.httpClient.post(`${this.apiURL}add_to_cart`,data,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getCartItems():Observable<any>
  {
      return this.httpClient.get(`${this.apiURL}get_cart_prods`,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getCartById(arr:any):Observable<any>
  {
    return this.httpClient.post(`${this.apiURL}get_cart_by_id`,arr,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletCart(id:any):Observable<any>
  {
     return this.httpClient.delete(`${this.apiURL}delete_cart/${id}`,this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
     )
  }

  storeOrder(data:any):Observable<any>
  {
     return this.httpClient.post(`${this.apiURL}store_order`,data,this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
     )
  }

  getAllOrders():Observable<any>
  {
     return this.httpClient.get(`${this.apiURL}get_all_orders`,this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
     )
  }



  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
