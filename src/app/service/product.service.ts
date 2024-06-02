import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  apiURL = 'http://localhost:3000/products';


  constructor() { }
  // getAllProduct
  getAllProduct() {
    return this.http.get<Product[]>(`${this.apiURL}`);
    // return this.http.get<Product[]>(`${this.apiURL}?_limit=${6}`);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiURL}`, product);
  }
  editProduct(id: number | undefined, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiURL}/${id}`, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  // getDetailProduct
  // createProduct
  // updateProduct
  // deleteProduct
  //   searchProduct(query: string) { 
  //  return this.http.get<Product[]>(`${this.apiURL}?q=${query}`);
  //   }
}
