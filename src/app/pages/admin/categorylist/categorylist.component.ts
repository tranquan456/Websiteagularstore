import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../interfaces/product';
import { CategoryService } from '../../../service/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css'
})
export class CategorylistComponent {
  toastr = inject(ToastrService);
  searchText: any
  filteredProducts: Product[] = [];
  products: Category[] = [];
  filterValue: string = '';//ánh xạ tới textbox search

  categoryService = inject(CategoryService);
  // ngOnInit
  ngOnInit() {
    this.categoryService
      .getAllCategory()
      .subscribe({
        next: (products) => {
          this.products = products
        },
        error: (error) => {
         
          this.toastr.error("Không có dữ liệu",error.message)


        }
      });
  }
  handleDelete(id: any) {
    if (window.confirm('Bạn có chắc muốn xóa')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          this.toastr.success('Xóa thành công!');
          this.products = this.products.filter((product) => product.id !== id);
        },
        error: (error) => {
          this.toastr.error("Xóa thất bại",error.message)
        },
      });
    }
  }
}
