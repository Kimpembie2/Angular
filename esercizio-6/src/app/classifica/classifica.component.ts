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
  {img: "https://d21is3bk1bus90.cloudfront.net/roster_avatars_v2/color/large/cyber.webp", nickname: "Cyber"}
]
}
