import { Component } from '@angular/core';
import { Esercizio2Component2Component } from '../esercizio-2-component2/esercizio-2-component2.component';
import { Esercizio2Component3Component } from '../esercizio-2-component3/esercizio-2-component3.component';

@Component({
  selector: 'app-esercizio-2-component1',
  standalone: true,
  imports: [Esercizio2Component2Component, Esercizio2Component3Component],
  templateUrl: './esercizio-2-component1.component.html',
  styleUrl: './esercizio-2-component1.component.css'
})
export class Esercizio2Component1Component {
nome = 'Spider-Man Pointing at Spider-Man';
descrizione = 'Spider-Man Pointing at Spider-Man refers to an image from the 60s Spider-Man cartoon episode in which two people in Spider-Man costumes are pointing at each other';
nome2 = 'Donald Trump s Mugshot'
descrizione2 = 'On August 24th, 2023, the Fulton County Sheriff s Office released Donald Trump s official mugshot after he briefly appeared to get booked at the jail.[12] It is notably the first mugshot of a United States President ever taken.'
}
