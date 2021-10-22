import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesDataService } from 'src/app/service/games-data.service';
import { Game } from '../games-list/games-list.component';

@Component({
  selector: 'app-games-one',
  templateUrl: './games-one.component.html',
  styles: [
  ]
})

export class GamesOneComponent implements OnInit {
  game: Game = new Game();
  constructor(private activatedRoute: ActivatedRoute,
    private gamesDataService: GamesDataService, 
    private _router: Router) { }

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.params['gameId']
    this
      .gamesDataService
      .getOneGame(gameId)
      .then(response => this.game = response);
  }

  onEdit(gameId:string): void{
      this._router.navigate(["edit/" + gameId])
  }

  onDelete(gameId:string): void{
    this.gamesDataService
      .deleteGame(gameId)
      .then(function(){
      });
      this._router.navigate(["games"])
        // .then(() => {
        //   window.location.reload();
        // });
  }

}


// export class GameOne {
//   title!: string;
//   price!: number;
//   year!: number;
//   _id!: string;
//   maxPlayers!: number;
//   minPlayers!: number;
//   minAge!: number;
//   designers!: string;
//   rate!: string;
// }
