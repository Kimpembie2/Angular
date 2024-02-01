import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-esercizio3-component2',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './esercizio3-component2.component.html',
  styleUrl: './esercizio3-component2.component.css'
})
export class Esercizio3Component2Component {
  constructor() {
    console.log('Il componente è stato inizializzato')
  }
}