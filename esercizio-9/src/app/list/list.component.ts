import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  spazio : any[] = [
    {destinazione: "Alpha Centauri Bb", sistema: "Via Lattea", durata: "100 anni (viaggio a velocità sub-luminale con ibernazione)", datapartenza: new Date().getTime(), dataarrivo: new Date().getTime() + (100 * 365 * 24 * 60 * 60 * 1000), distanza: "4,37", spazioporto: "Spaceport Alpha, Luna", costo: "10000000", img: '../../assets/img/pianeta1.jpg'},
    {destinazione: "Trappist-1d", sistema: "Via Lattea", durata: "39 anni (viaggio a velocità sub-luminale con ibernazione opzionale)", datapartenza: new Date().getTime(), dataarrivo: new Date().getTime() + (39 * 365 * 24 * 60 * 60 * 1000), distanza: "39,6", spazioporto: "Spaceport Beta, Marte", costo: "50000000", img: '../../assets/img/pianeta2.png'},
    {destinazione: "Gliese 581g", sistema: "Via Lattea", durata: "20 anni (viaggio a velocità sub-luminale con ibernazione opzionale)", datapartenza: new Date().getTime() + (20 * 365 * 24 * 60 * 60 * 1000), distanza: "20,3", spazioporto: "Spaceport Gamma, Terraform Station Luna", costo: "100000000", img: '../../assets/img/pianeta3.jpg'},
    {destinazione: "Proxima Centauri b", sistema: "Via Lattea", durata: "20 anni (viaggio a velocità sub-luminale con ibernazione opzionale)", datapartenza: new Date().getTime() + (20 * 365 * 24 * 60 * 60 * 1000), distanza: "4,24", spazioporto: "Spaceport Delta, Terra", costo: "150000000", img: '../../assets/img/pianeta4.jpg'},
    {destinazione: "Kepler-452b", sistema: "Via Lattea", durata: "1400 anni (viaggio a velocità sub-luminale con ibernazione)", datapartenza: new Date().getTime() + (1400 * 365 * 24 * 60 * 60 * 1000), distanza: "1400", spazioporto: "Spaceport Epsilon, Terra", costo: "1000000000", img: '../../assets/img/pianeta5.jpg'}
  ]
}
