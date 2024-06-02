
import { ProductaddComponent } from './productadd/productadd.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, SidebarComponent, HomeComponent, ProductaddComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
