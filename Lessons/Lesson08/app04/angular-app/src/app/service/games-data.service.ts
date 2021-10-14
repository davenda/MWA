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

  public getOneGame(): Promise<Game>{
    const url: string = this.apiBaseUrl + "/games/" + "5fbed15c07a5894b456a4336";
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
