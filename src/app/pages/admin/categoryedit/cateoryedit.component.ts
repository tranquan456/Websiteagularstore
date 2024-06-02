import { Component, inject } from '@angular/core';
import { Category } from '../../../interfaces/category';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cateoryedit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cateoryedit.component.html',
  styleUrl: './cateoryedit.component.css'
})
export class CateoryeditComponent {
  product: Category = {
    name: '',
    description: '',
  };
  toastr = inject(ToastrService)
  constructor(private categoryService: CategoryService, private router: Router, private activeRoute: ActivatedRoute, private fb: FormBuilder) {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.categoryService.getCategoryById(id).subscribe({
          next: (product) => {
            this.product = product;
             
             console.log(this.product);
          }
        })
      }
    })
  }
  onHandleSubmit(form: NgForm) {
    if (form.valid) {
      this.categoryService.editCategory(this.product.id, form.value).subscribe({
        next: (data) => {
          this.toastr.success('Sửa thành công')
          this.router.navigateByUrl('/admin/categories/list')
          console.log(data);
          form.reset();
        },
        error: (error) => {
          this.toastr.error("Sửa thất bại",error.message)
        },
        complete: () => console.log('done')
      })
    }
  }
}
