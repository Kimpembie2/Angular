import { Component } from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-classifica',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, CommonModule, NgSwitch, NgSwitchCase],
  templateUrl: './classifica.component.html',
  styleUrl: './classifica.component.css'
})
export class ClassificaComponent {
pro= [
  {img: "https://staff-cdn.siege.gg/player-349-beaulo-6.png?resize=400&type=webp", nickname: "Beaulo", eta: 22, nazione: 'Usa', operatore: "Difensore", news: "https://siege.gg/news/+Beaulo"  } ,
  {img: "https://prosettings.net/wp-content/uploads/paluh.png", nickname: "Paluh", eta: 24 , nazione: 'Brasil', operatore: "Attaccante", news: "https://siege.gg/news/+Paluh?page"} ,
  {img: "https://staff-cdn.siege.gg/player-892-shiinka-3.png?resize=400&type=webp", nickname: "Shiinka", eta: 25, nazione: 'France', operatore: "Difensore", news: "https://www.everyeye.it/articoli/intervista-rainbow-sis-siege-tu-shiinka-tempra-esports-51070.html"} ,
  {img: "https://staff-cdn.siege.gg/player-27-risze-3.png?resize=400&type=webp", nickname: "Risze", eta: 31 , nazione: 'Belgium', operatore: "Attaccante", news: "https://blix.gg/news/the-story-of-risze-the-belgian-legend"} ,
  {img: "https://staff-cdn.siege.gg/player-610-speakeasy-3.png?resize=400&type=webp", nickname: "SpeakEasy", eta: 23 , nazione: 'Singapore', operatore: "Attaccante", news: "https://www.youtube.com/watch?v=7yzMAthOMKU"}  
]
pro2= [
  {img: "https://staff-cdn.siege.gg/player-4-pengu-2.png?resize=400&type=webp", nickname: "Pengu", eta: 26, nazione: 'Denmark', operatore: "Attaccante", news: "https://www.everyeye.it/notizie/rainbow-six-siege-era-cala-sipario-pengu-502679.html"} ,
  {img: "https://staff-cdn.siege.gg/player-1331-lily.png?resize=400&type=webp", nickname: "Lily", eta: 23, nazione: 'Japan', operatore: "Difensore", news: "https://siege.gg/players/1331-lily"} ,
  {img: "https://staff-cdn.siege.gg/player-1983-ray-1.png?resize=400&type=webp", nickname: "Ray", eta: 23, nazione: 'Taiwan', operatore: "Attaccante", news: "https://siege.gg/news/dire-wolves-sign-ray-move-haram3e-back-to-starting-position-hours-before-si-qualifier"} ,
  {img: "https://staff-cdn.siege.gg/player-2042-pechito.png?resize=400&type=webp", nickname: "Pechito", eta: 21 , nazione: 'Argentina', operatore: "Attaccante", news: "https://www.youtube.com/watch?v=-Ej04Wnqusg"} ,
  {img: "https://prosettings.net/wp-content/uploads/jynxzi.png", nickname: "Jynxzi", eta: 22 , nazione: 'Usa', operatore: "Difensore", news: "https://www.tuko.co.ke/facts-lifehacks/celebrity-biographies/541015-where-jynxzi-real-life-nationality-ethnicity-parents-hometown/"}
]
  onClick(link:string){
    window.open(link, '_blank');
  }
}
