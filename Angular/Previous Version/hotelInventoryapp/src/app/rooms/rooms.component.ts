import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RoomsAvailability, RoomDetails } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // Donot apply ngOnChanges and ngDoCheck together. It will capture values twice
  @ViewChild(HeaderComponent)
  // @ViewChild(HeaderComponent, { static: true }) Donot use static:true when using async code
  headerComponent!: HeaderComponent;
  constructor() {}
  hotelName = 'Pearl Continental';
  stars = 5;
  hideRooms = false;
  title = 'Room Detail Data';

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  roomsAvailability: RoomsAvailability = {
    totalRooms: 20,
    bookedRooms: 15,
    availableRooms: 3,
  };

  roomDetails: RoomDetails[] = [];
  selectedRoom!: RoomDetails;

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Hello World';
  }
  ngDoCheck(): void {
    console.log('On changes Called');
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerChildrenComponent.last.title = 'Last Title';
    console.log(this.headerChildrenComponent);
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Rooms View';
  }

  ngOnInit(): void {
    this.roomDetails = [
      {
        roomNumber: 1,
        roomType: 'Economy',
        amenties: '3 Meals',
        price: 45000,
        photos: 'Room photo',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('14-Nov-2023'),
        rating: 4.2231,
      },
      {
        roomNumber: 2,
        roomType: 'VIP',
        amenties: '3 Meals, SPA, POOL, Hockey Club',
        price: 100000,
        photos: 'Room photo',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('14-Nov-2023'),
        rating: 4.9231,
      },
      {
        roomNumber: 3,
        roomType: 'First Class',
        amenties: '3 Meals, SPA, SAUNA',
        price: 70000,
        photos: 'Room photo',
        checkInTime: new Date('11-Nov-2023'),
        checkOutTime: new Date('14-Nov-2023'),
        rating: 4.111,
      },
    ];
  }

  selectRoom(room: RoomDetails) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomDetails = {
      roomNumber: 4,
      roomType: 'VIP',
      amenties: '3 Meals, SPA, POOL, Hockey Club',
      price: 100000,
      photos: 'Room photo',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023'),
      rating: 4.9231,
    };
    // this.roomDetails.push(room);
    this.roomDetails = [...this.roomDetails, room];
  }

}
