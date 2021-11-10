import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catcher',
  templateUrl: './catcher.component.html',
  styleUrls: ['./catcher.component.scss']
})
export class CatcherComponent implements OnInit {

  pokeInfo?: String;

  constructor() { }

  ngOnInit(): void {
  }

}
