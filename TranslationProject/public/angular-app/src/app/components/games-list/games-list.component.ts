import { Component, OnInit } from '@angular/core';

import { GamesDataService } from 'src/app/service/games-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styles: [
  ]
})
export class GamesListComponent implements OnInit {
  games: Game[] = []
  newGame = new Game();
  constructor(private gamesDataService: GamesDataService) { }

  ngOnInit(): void {
    this
      .gamesDataService
      .getGames()
      .then(response => this.games=response);
  }

  onSubmit(): void {
    console.log(this.newGame);
    this.gamesDataService
      .addGame(this.newGame)
      .then();
      this.newGame = new Game();
  }

}

export class Game {
  title!: string;
  price!: number;
  year!: number;
  _id!: string;
  minAge!: number;
  maxPlayers!: number;
  minPlayers!: number;
  designers!: string;
  rate!: string;
  publisher!: any ;
}
