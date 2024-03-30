import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  key = (sessionStorage.getItem('admindetails')) ? JSON.parse(sessionStorage.getItem('admindetails')) : '';
  private api_key = this.key.token;
  private apiURL = "http://127.0.0.1:8000/api/admin";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.api_key}`
    })
  }


  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>
  {
     return this.http.post('http://127.0.0.1:8000/api/admin_login',data)
     .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllcategroies():Observable<any>
  {
      return this.http.get(`${this.apiURL}`+'/categories',this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  addcategory(data:any)
  {
       return this.http.post(`${this.apiURL}`+'/categories',data,this.httpOptions)
       .pipe(
        catchError(this.errorHandler)
       )
  }

  getProducts():Observable<any>
  {
      return this.http.get(`${this.apiURL}`+'/get_all_products',this.httpOptions)
      .pipe(
         catchError(this.errorHandler)
      )
  }

  addProduct(data:any):Observable<any>
  {
      return this.http.post(`${this.apiURL}`+'/product_submit',data,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
     )
  }

  getproductById(id:any):Observable<any>
  {
      return this.http.get(`${this.apiURL}`+'/get_product_by_id/'+id,this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
     )
  }

  chngStatus(id:any,st:any):Observable<any>
  {
     return this.http.put(`${this.apiURL}`+'/update_pstatus/'+id,st,this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
   )
  }

  chngCatSt(id:any,st:any):Observable<any>
  {
      return this.http.put(`${this.apiURL}`+'/categories_st_update/'+id,st,this.httpOptions)
      .pipe(
         catchError(this.errorHandler)
      )
  }

  adminLogout():Observable<any>
  {
     return this.http.get(`${this.apiURL}`+'/logout',this.httpOptions)
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
