import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesOneComponent } from './components/games-one/games-one.component';
import { RatingDirective } from './directive/rating.directive';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterTemplateComponent } from './components/register-template/register-template.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorPageComponent,
    GamesListComponent,
    GamesOneComponent,
    RatingDirective,
    FooterComponent,
    NavigationComponent,
    RegisterComponent,
    RegisterTemplateComponent,
    GameEditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "edit/:gameId",
        component: GameEditComponent,
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
