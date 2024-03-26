import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
pagina: string = "home"
nome1: string =  "Snivy"
nome2: string =  "Tepig"
nome3: string =  "Oshawott"
altezza1: string = "0,6 m"
altezza2: string = "0,5 m"
altezza3: string = "0,5 m"
peso1: string = "8,1 kg"
peso2: string = "9,9 kg"
peso3: string = "5,9 kg"
sesso1: string = "M/F"
sesso2: string = "M/F"
sesso3: string =  "M/F"
categoria1: string = "Serperba"
categoria2: string = "Suinfuoco"
categoria3: string = "Lontra"
abilita1: string = "Erbaiuto"
abilita2: string = "Aiutofuoco"
abilita3: string = "Acquaiuto"
percorso1: string = "Nuvema Town"
percorso2: string = "Nuvema Town"
percorso3: string = "Nuvema Town"
bottoneSnivy(event:MouseEvent){
this.pagina = "Snivy"
}
bottoneTepig(event:MouseEvent){
this.pagina = "Tepig"
}
bottoneOshawott(event:MouseEvent){
this.pagina = "Oshawott"
}
bottoneHome(event:MouseEvent){
  this.pagina = "home"
}
}
