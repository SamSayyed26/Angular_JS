import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  SkipSelf,
} from '@angular/core';
import { RoomsAvailability, RoomDetails } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'console';

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
  hotelName = 'Pearl Continental';
  stars = 5;
  hideRooms = false;
  title = 'Room Detail Data';
  getJSONvalue: any;
  postJSONvalue: any;

  getMethod() {
    this.http
      .get<RoomDetails[]>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        console.log('API Data: ', data);
        this.getJSONvalue = data;
        // this.roomDetails = [...this.roomDetails, this.getJSONvalue];
      });
  }
  postMethod() {
    const headers = new HttpHeaders({
      contentType: 'application/json',
    });
    let body = {
      roomNumber: 4,
      roomType: 'VIP',
      amenties: '3 Meals, SPA, POOL, Hockey Club',
      price: 100000,
      photos: 'Room photo',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023'),
      rating: 4.9231,
    };
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', body, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log('POST DATA: ', data);
        this.postJSONvalue = data;
        this.roomDetails = [...this.roomDetails, this.postJSONvalue];
      });
  }
  editMethod() {
    let body = {
      roomNumber: 3,
      roomType: 'VIP',
      amenties: '3 Meals, SPA, POOL, Hockey Club',
      price: 100000,
      photos: 'Room photo',
      checkInTime: new Date('11-Nov-2023'),
      checkOutTime: new Date('14-Nov-2023'),
      rating: 4.9231,
    };
    this.http
      .put<RoomDetails[]>('https://jsonplaceholder.typicode.com/posts/1', body)
      .subscribe((data) => {
        console.log('NEw Room data: ', data);
        console.log(this.roomDetails);
        this.roomDetails.map((room) => {
          if (room.roomNumber === body.roomNumber) {
            console.log('Inside put function');
            room.roomType = body.roomType;
            room.amenties = body.amenties;
            room.price = body.price;
            room.photos = body.photos;
            room.checkInTime = body.checkInTime;
            room.checkOutTime = body.checkOutTime;
          }
        });
      });
  }

  // deleteMethod(){
  //   this.http.delete<RoomDetails[]>('https://jsonplaceholder.typicode.com/posts/1').subscribe(room => {
  //     this.roomDetails.map((room) => {
  //       if (room.roomNumber === ) {
          
  //       }
  //     });
  //   })
  // }
  
  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private http: HttpClient
  ) {
    this.getMethod();
    this.postMethod();
    // this.editMethod();
  }

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  roomsAvailability: RoomsAvailability = {
    totalRooms: 20,
    bookedRooms: 15,
    availableRooms: 3,
  };

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
    observer.error('error');
  });
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
    // this.stream.subscribe((data) => console.log("Stream Data:", data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (error) => console.log(error),
    });
    this.roomDetails = this.roomsService.getRooms();
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
