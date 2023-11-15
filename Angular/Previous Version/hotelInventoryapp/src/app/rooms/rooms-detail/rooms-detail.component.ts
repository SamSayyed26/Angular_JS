import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomDetails } from '../rooms';
import { error } from 'console';

@Component({
  selector: 'app-rooms-detail',
  templateUrl: './rooms-detail.component.html',
  styleUrls: ['./rooms-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsDetailComponent implements OnInit, OnChanges, OnDestroy {
  //ngOnChanges only work when we have an input property or when the input property changes
  @Input() rooms: RoomDetails[] = [];
  @Input() title: string = 'Rooms';

  @Output() roomSelected = new EventEmitter<RoomDetails>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented');
    // console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}
  selectRoom(room: RoomDetails) {
    this.roomSelected.emit(room);
  }

  ngOnDestroy(): void {
    console.log('On desrtoy called');
  }
}
