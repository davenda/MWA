import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token: string = localStorage.getItem("gamesToken") as string;
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    })
    return this
      .httpClient
      .get(url, {headers: headers})
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

  private handleError(error: any):Promise<any>{
    console.log("Something went wrong", error);
  return Promise.reject(error.message || error);
  }

}
