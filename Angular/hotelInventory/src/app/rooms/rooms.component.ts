import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsAvailability, RoomDetails } from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  // constructor() {}
  hotelName = 'Pearl Continental';
  stars = 5;
  hideRooms = false;

  roomsAvailability: RoomsAvailability = {
    totalRooms: 20,
    bookedRooms: 15,
    availableRooms: 3,
  };

  roomDetails: RoomDetails[] = [
    {
      roomNumber: 1,
      roomType: 'Economy',
      amenties: '3 Meals',
      price: 40000,
      photos: 'Room photo',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023'),
      rating: 4.2231
    },
    {
      roomNumber: 2,
      roomType: 'VIP',
      amenties: '3 Meals, SPA, POOL, Hockey Club',
      price: 100000,
      photos: 'Room photo',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023'),
      rating: 4.9231
    },
    {
      roomNumber: 3,
      roomType: 'First Class',
      amenties: '3 Meals, SPA, SAUNA',
      price: 70000,
      photos: 'Room photo',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023'),
      rating: 4.111
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
