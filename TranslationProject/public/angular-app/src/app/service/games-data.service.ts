import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Game } from '../components/games-list/games-list.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  private apiBaseUrl: string = "http://localhost:3000/api"

  constructor(private httpClient:HttpClient) {

  }

  public getGames(): Promise<Game[]>{
    const url: string = this.apiBaseUrl+ "/games";
    return this
      .httpClient
      .get(url)
      .toPromise()
      .then(response => response as Game[])
      .catch(this.handleError);
  }

  public getOneGame(gameId: string): Promise<Game>{
    const url: string = this.apiBaseUrl + "/games/" + gameId;
    return this
      .httpClient
      .get(url)
      .toPromise()
      .then(response => response as Game)
      .catch(this.handleError);

  }

  public deleteGame(gameId: string): Promise<Game>{
    const url: string = this.apiBaseUrl + "/games/" + gameId;
    return this
      .httpClient
      .delete(url)
      .toPromise()
      .then(response => response as Game)
      .catch(this.handleError);
  }

  public updateGame(gameData: Game): Promise<Game>{
    const url: string = this.apiBaseUrl + "/games/" + gameData._id;
    return this
      .httpClient
      .put(url, gameData)
      .toPromise()
      .then(response => response as Game)
      .catch(this.handleError);
  }
  public addGame(gameData: Game): Promise<Game>{
    const url: string = this.apiBaseUrl + "/games/";
    return this
      .httpClient
      .post(url, gameData)
      .toPromise()
      .then(response => response as Game)
      .catch(this.handleError);
  }

  private handleError(error: any):Promise<any>{
    console.log(error);
  return Promise.reject(error.message || error);
  } 

}
