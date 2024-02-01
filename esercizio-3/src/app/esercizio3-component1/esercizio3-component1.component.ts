import { Component } from '@angular/core';
import { Esercizio3Component2Component } from '../esercizio3-component2/esercizio3-component2.component';
import { Esercizio3Component3Component } from '../esercizio3-component3/esercizio3-component3.component';

@Component({
  selector: 'app-esercizio3-component1',
  standalone: true,
  imports: [Esercizio3Component2Component, Esercizio3Component3Component],
  templateUrl: './esercizio3-component1.component.html',
  styleUrl: './esercizio3-component1.component.css'
})
export class Esercizio3Component1Component {
  meme = [
    {
      memename: "Ronaldo Sipping / Drinking",
      memed: "Part of a series on Cristiano Ronaldo."
    },
    {
      memename: "Josh Hutcherson 'Whistle' Edit",
      memed: "Part of a series on Fancam."
    }

  ]
}