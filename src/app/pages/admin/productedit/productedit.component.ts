import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { Category } from '../../../interfaces/category';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-productedit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
  product: Product = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  categoryService = inject(CategoryService);
  categories: Category[] = [];
  ngOnInit() {
    this.categoryService
      .getAllCategory()
      .subscribe({
        next: (data) => {
          this.categories = data
        },
        error: (error) => {
         
          this.toastr.error("Không có dữ liệu",error.message)


        }
      });
  }
  toastr = inject(ToastrService)
  constructor(private productService: ProductService, private router: Router, private activeRoute: ActivatedRoute, private fb: FormBuilder) {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getProductById(id).subscribe({
          next: (product) => {
            this.product = product;
            // this.form.patchValue(product);
            // console.log(this.product);
          }
        })
      }
    })
  }
  onHandleSubmit(form: NgForm) {
    if (form.valid) {
      this.productService.editProduct(this.product.id,form.value).subscribe({
        next: (data) => {
          this.toastr.success('Sửa thành công')
            this.router.navigateByUrl('/admin/products/list')
          console.log(data);
          form.reset();
        },
        error: (error) => {
          this.toastr.error("Sửa thất bại", error.message)
        },
        complete: () => console.log('done')
      })
    }
  }
}
