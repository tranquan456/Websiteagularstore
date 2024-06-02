import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../service/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule,RouterOutlet],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  toastr = inject(ToastrService);
  products: Product[] = [];
  constructor(private router: Router) { }
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
          // this.toastr.error('Không có dữ liệu !', '', {
          //   timeOut: 3000,
          // });
          this.toastr.error("Lỗi server",error.message)
          this.router.navigateByUrl('**')

        }
      });
  }
}
