import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictac',
  template: `
    <p>
      Tictac works!
    </p>
    <a href="https://www.mathsisfun.com/games/tic-tac-toe.html" target="_blank">Play Tictac</a>
  `,
  styles: [
  ]
})
export class TictacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
