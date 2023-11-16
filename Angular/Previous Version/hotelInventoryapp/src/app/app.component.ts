import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  Optional,
  Inject,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelInventory';
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage
  ) {}

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.stars = 4.3;
  }

  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = 'InterStellar';
    console.log(this.name);
    this.localStorage.setItem('name', 'Interstellar');
  }

  role = 'Admin';
}
