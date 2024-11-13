import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/page-home/header/header.component";
import { ImagensPrincipaisComponent } from './pages/page-home/imagens-principais/imagens-principais.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ImagensPrincipaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-blends';
}
