import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pagina1Component, Pagina2Component, Pagina3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-esercizio4';
}
