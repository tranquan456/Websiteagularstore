import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ProductService } from './../../../service/product.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-productadd',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  
  toastr = inject(ToastrService)
  categoryService = inject(CategoryService);
  categories: Category[] = [];
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit() {
    this.categoryService
      .getAllCategory()
      .subscribe({
        next: (data) => {
          this.categories = data
        },
        error: (error) => {
          // this.toastr.error('Không có dữ liệu !', '', {
          //   timeOut: 3000,
          // });
          this.toastr.error("Không có dữ liệu",error.message);


        }
      });
  }
  onHandleSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(form.value).subscribe({
        next: (data) => {
          this.toastr.success('Thêm mới thành công')
            this.router.navigateByUrl('/admin/products/list')
          console.log(data);
          form.reset();
        },
        error: (error) => {
          this.toastr.error("Thêm mới thất bại",error.message);
        },
        complete: () => console.log('done')
      })
    }
  }
 
}
