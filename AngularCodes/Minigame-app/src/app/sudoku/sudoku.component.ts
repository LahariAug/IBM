import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  template: `
    <p>
      Sudoku works!
     
    </p>
    <a href="https://sudoku.com/" target="_blank">Play Sudoku</a>
  `,
  styles: [
  ]
})
export class SudokuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
