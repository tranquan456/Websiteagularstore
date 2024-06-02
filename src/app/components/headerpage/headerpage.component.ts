import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-headerpage',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './headerpage.component.html',
  styleUrl: './headerpage.component.css'
})
export class HeaderpageComponent {

}
