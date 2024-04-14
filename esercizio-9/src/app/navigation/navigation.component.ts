import { Component, output } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() mandaDatiEvento = new EventEmitter<string>();
  @Output() mandaDatiEvento2 = new EventEmitter<string>();
  pagina = "home"
  goHome() {
    this.pagina = "home"
    this.mandaDatiEvento.emit(this.pagina);
  }
  goBiglietti() {
    this.pagina = "biglietti"
    this.mandaDatiEvento2.emit(this.pagina);
  }
}

