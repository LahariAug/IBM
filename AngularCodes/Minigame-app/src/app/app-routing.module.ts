import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent}from'./page-not-found/page-not-found.component';
import {WordleComponent}from'./wordle/wordle.component';
import{SudokuComponent}from'./sudoku/sudoku.component';
import{TictacComponent}from'./tictac/tictac.component';
import{StudyComponent}from'./study/study.component';
import{GameComponent}from'./game/game.component';

const routes: Routes = [
	{path : '',redirectTo:'/game',pathMatch:'full'},
	{path:'game',component:GameComponent},
	{path : 'wordle',component :WordleComponent},
	{path : 'sudoku',component :SudokuComponent},
	{path : 'tictac',component :TictacComponent},
	{path : 'study',component:StudyComponent},
	{path : "**",component :PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
