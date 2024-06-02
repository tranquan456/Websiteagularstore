import { CategoryService } from './../../../service/category.service';
import { Category } from './../../../interfaces/category';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
  toastr = inject(ToastrService)
  constructor(private categoryService: CategoryService, private router: Router) { }
  onHandleSubmit(form: NgForm) {
    if (form.valid) {
      this.categoryService.addCategory(form.value).subscribe({
        next: (data) => {
          this.toastr.success('Thêm mới thành công')
          this.router.navigateByUrl('/admin/categories/list')
          console.log(data);
          form.reset();
        },
        error: (error) => {
          this.toastr.error("Thêm mới thất bại",error.message)
        },
        complete: () => console.log('done')
      })
    }
  }
}
