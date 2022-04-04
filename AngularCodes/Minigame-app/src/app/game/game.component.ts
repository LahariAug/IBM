import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  template: `
    
 <nav>
   <a class="game" routerLink="/wordle">Wordle</a><br>
   <a class="game" routerLink="/sudoku">Sudoku</a><br>
   <a class="game" routerLink="/tictac">Tic tac</a>
</nav>
    
  `,
  styles: [
  ]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
