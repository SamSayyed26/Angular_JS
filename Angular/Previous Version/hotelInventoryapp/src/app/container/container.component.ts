import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChild,
  Host,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers: [RoomsService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  // constructor(@Host() private roomsService: RoomsService) {}

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  constructor(){}

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Sam';
  }
  ngOnInit(): void {}
}
