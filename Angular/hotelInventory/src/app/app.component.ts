import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  //Decorator
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hello World</h1>`,
  // styles: `h1{
  //   color: red;
  // }`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotelInventory';

  role = 'Admin';
}

// You can change the prefix in angular.json to whatever you want, but then make sure to change it file app.components.ts or there may be more files and in there where is app added, change it to the new prefix value. it also needs to be changed in the main index file
