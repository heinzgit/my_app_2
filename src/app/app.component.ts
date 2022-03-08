import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: 'aa', type: 'blueprint', content: 'content'}, 
  {name: 'aa', type: 'server', content: 'content'}];



}
