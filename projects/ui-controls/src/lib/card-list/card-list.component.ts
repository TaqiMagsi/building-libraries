import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Output() cardChange = new EventEmitter<Card[]>();
  sortCards(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cards, event.previousIndex, event.
      currentIndex);
    this.cardChange.emit(this.cards);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
