import { Component } from '@angular/core';
import { Pagina2Component } from '../pagina2/pagina2.component';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [Pagina2Component],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {

}
