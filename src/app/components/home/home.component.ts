import { Component, OnInit } from '@angular/core';

import { Phrase } from 'src/app/models/phraseModel';
import { phrases }  from '../../../assets/data/phrases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phrases: Phrase[];
  constructor() { 
    console.log('frases', phrases)
    this.phrases = phrases;
  }

  ngOnInit(): void {
  }

  displayChild: boolean = false;

  goToApp(): void {
    this.displayChild = true;
  }
}
