import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string){
this.addFavoriteEvent.emit(gameName);
  }
games = [
  {
    id: 1,
    name: 'Uncharted 4'
  },
  {
    id: 2,
    name: 'Valorant'
  },
  {
    id: 3,
    name: 'The Last Of Us'
  }
]
}
