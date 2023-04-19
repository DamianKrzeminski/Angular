import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectApp';
  backgroundColor = '#ebebeb';

  changeColor(newItem: string){
    this.backgroundColor = newItem;
  }
}
