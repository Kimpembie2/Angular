import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  selector: 'app-classifica',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './classifica.component.html',
  styleUrl: './classifica.component.css'
})
export class ClassificaComponent {
pro: any[] = [
  {img: "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/beaulo.png", nickname: "Beaulo", età: 22, nazione: 'Usa', operatore: "Valkyrie", news: "https://siege.gg/news/+Beaulo"  }
  {img: "https://prosettings.net/wp-content/uploads/paluh.png", nickname: "Paluh", età: 24 , nazione: 'Brasil', operatore: "Sledge", news: "https://siege.gg/news/+Paluh?page"}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}
  {img: "", nickname: "", età: , nazione: '', operatore: "", news: ""}


]
}
