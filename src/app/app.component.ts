import { Component } from '@angular/core';
import { Card } from 'ui-controls'
import { assassins } from './assassins';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'building-libraray';
  cards: Card[] = assassins;

  onCardChange(cards: any) {
    console.log(cards);
   }
   
}
