import { Component } from '@angular/core';
import { Game } from '../../games/game.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

const games: Game[] = [
  { id: 1, title: 'Elden Ring', platform: 'PC', status: 'Zerado' },
  { id: 2, title: 'Baldur\'s Gate 3', platform: 'PC', status: 'Jogando' },
  { id: 3, title: 'The Legend of Zelda: Tears of the Kingdom', platform: 'Switch', status: 'Em Espera' }
];


@Component({
  selector: 'app-game-list',
  imports: [CommonModule, MatTableModule],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss'
})
export class GameList {
  displayedColumns: string[] = ['id', 'title', 'platform', 'status'];
  dataSource = games;
}
