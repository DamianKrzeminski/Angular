import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  animations: [
    trigger('showSecondNav', [
      state('show', style({
        height: '50px',
        backgroundColor: 'rgb(119, 171, 250)'
      })),
      state('hide', style({
        height: '0px',
        backgroundColor: 'rgb(32, 104, 213)'
      })),
      transition('show => hide', [
        animate('0.5s')
      ]),
      transition('hide => show', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class TopNavComponent {
  @Output() changeColorEvent = new EventEmitter<string>();

  backgroundColor = '#3d3d3d';
  setColor(value: string) {
    if(this.backgroundColor === '#ebebeb'){
      this.backgroundColor = '#3d3d3d';
    }else{
      this.backgroundColor = '#ebebeb';
    }
    this.changeColorEvent.emit(value);
  }

  isShow = false;
  displayButton = 'none';

  toggle() {
    this.isShow = !this.isShow;
    if(this.isShow){
      this.displayButton = 'initial';
    }else{
      this.displayButton = 'none'
    }
  }
}