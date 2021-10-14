import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GamesListComponent } from './components/games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorPageComponent,
    GamesListComponent,
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
        path: "**",
        component: ErrorPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
