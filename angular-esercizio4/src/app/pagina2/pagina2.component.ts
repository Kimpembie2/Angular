import { Component } from '@angular/core';
import { Pagina3Component } from '../pagina3/pagina3.component';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [Pagina3Component],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {

}
