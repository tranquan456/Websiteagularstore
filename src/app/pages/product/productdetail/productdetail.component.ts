import { Component, inject } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  route = inject(ActivatedRoute);
  toastr = inject(ToastrService);
  constructor(private router: Router) { }
  productService = inject(ProductService);
  product!: Product | undefined;

  ngOnInit() {
    this.route.params.subscribe((param) => {
      console.log(param['id']);
      this.productService.getProductById(param['id']).subscribe({
        next: (data) => {
          console.log(data);
          this.product = data;
        },
        error: (error) => {
          // show thong bao error
          this.toastr.error("Lỗi server", error.message);
          this.router.navigateByUrl('**')
        },
      });
    });
  }
}
