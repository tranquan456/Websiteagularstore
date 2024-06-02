import { AdminComponent } from './pages/admin/admin.component';
import { ProductaddComponent } from './pages/admin/productadd/productadd.component';
import { HomeComponent } from './../../../lab1/src/app/pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inventor } from './interfaces/Inventor';
import { CommonModule } from '@angular/common';
import { IProduct } from './interfaces/Iproduct';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './pages/product/product.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AdminComponent, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

}
