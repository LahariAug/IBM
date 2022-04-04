import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleComponent } from './wordle/wordle.component';
import { TictacComponent } from './tictac/tictac.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudyComponent } from './study/study.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent,
    TictacComponent,
    SudokuComponent,
    PageNotFoundComponent,
    StudyComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
