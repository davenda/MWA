import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesDataService } from 'src/app/service/games-data.service';
import { Game } from '../games-list/games-list.component';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styles: [
  ]
})
export class GameEditComponent implements OnInit {

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
  onSave(): void {
    console.log("Values are", this.game);
    this.gamesDataService
      .updateGame(this.game)
      .then(function(){
      })
      this._router.navigate(['games/' + this.game._id])
  }

}
