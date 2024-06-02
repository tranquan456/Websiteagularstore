import { Component } from '@angular/core';
import { HeaderpageComponent } from '../../components/headerpage/headerpage.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderpageComponent, FooterComponent, RouterOutlet, ListComponent, ProductdetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class PageComponent {

}
