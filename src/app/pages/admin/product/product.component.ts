import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../service/product.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  toastr = inject(ToastrService);
  searchText: any
  filteredProducts:Product[] = [];
  products: Product[] = [];
filterValue: string = '';//ánh xạ tới textbox search
 
 productService = inject(ProductService);
  // ngOnInit
  ngOnInit() {
    this.productService
      .getAllProduct()
      .subscribe({
        next: (products) => {
          this.products = products
        },
        error: (error) => {
          
            this.toastr.error("Không có dữ liệu",error.message)
         
         
      }
  });
  }
  handleDelete(id:any) {
    if (window.confirm('Bạn có chắc muốn xóa')) {
      this.productService.deleteProduct(id).subscribe({
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
  loadAllData() {
    this.productService.getAllProduct().subscribe((res) => {
      this.products = res;
      this.filter();
      console.log(this.products);
    });

  }

  filter() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.filterValue.toLowerCase())
    );
    console.log(this.filteredProducts);

  }
}
