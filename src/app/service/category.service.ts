import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api = 'http://localhost:3000/category';

  constructor(private http: HttpClient) { }

  addCategory(data: Category): Observable<Category> {
    return this.http.post<Category>(this.api, data);
  }
  getAllCategory() {
    return this.http.get<Category[]>(`${this.api}`);
    
  }
  editCategory(id: number | undefined, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.api}/${id}`, category);
  }
  deleteCategory(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.api}/${id}`);
  }
}
