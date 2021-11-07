import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() phrases: string[] = [];

  currentSentence: number = 0;

  prev(): void {
    const newSentence: number = this.currentSentence - 1;

    if (newSentence < 0) {
      this.currentSentence = this.phrases.length - 1;
    } else {
      this.currentSentence = newSentence;
    }
  }

  next(): void {

    const newSentence: number = this.currentSentence + 1;

    if (newSentence >= this.phrases.length) {
      this.currentSentence = 0;
    } else {
      this.currentSentence = newSentence;
    }
  }
}
