import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-catcher',
  templateUrl: './catcher.component.html',
  styleUrls: ['./catcher.component.scss'],
  template: `
    <section class="wrapper" id="wrapper">
  `
})
export class CatcherComponent implements OnInit {

  pokeInfo?: String;

  constructor(private wrapper:ElementRef) {
    
  }

  ngOnInit(): void {
    let container = this.wrapper?.nativeElement.querySelector('#wrapper')
    container.addEventListener('wheel', (e: WheelEvent) => {
      if (e.deltaY > 0) this.scroll(1)
      else this.scroll(0)
    });
  }

  scroll(flag: Number) {
    if (flag == 1) this.wrapper.nativeElement.querySelector('#wrapper').scrollLeft += 100
    else this.wrapper.nativeElement.querySelector('#wrapper').scrollLeft -= 100
  }

}
