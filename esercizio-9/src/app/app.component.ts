import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, NavigationComponent, ListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio-9';

  pagina: string = "home"

  onRiceviDati(value: any){
    console.log(value)
    this.pagina = value
  }

  onRiceviDati2(value: any) {
    console.log(value)
    this.pagina = value
  }
}

