import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id: number = 0;

  // id$ = this.router.params.pipe(map((params) => params['id']));

  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id']; // this will never update the value if it is already in the view
    // this.router.params.subscribe((params) =>
    //   console.log('roomId: ', params['id'])
    // );
  }
}
