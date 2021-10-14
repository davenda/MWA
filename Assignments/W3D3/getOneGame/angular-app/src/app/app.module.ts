import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesOneComponent } from './components/games-one/games-one.component';
import { RatingDirective } from './directive/rating.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorPageComponent,
    GamesListComponent,
    GamesOneComponent,
    RatingDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "games",
        component: GamesListComponent,
      },
      {
        path: "games/:gameId",
        component: GamesOneComponent,
      },
      {
        path: "**",
        component: ErrorPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
