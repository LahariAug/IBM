import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordle',
  template: `
    <p>
      wordle works!
    </p>
    <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Play Today's Wordle</a>
  `,
  styles: [
  ]
})
export class WordleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
