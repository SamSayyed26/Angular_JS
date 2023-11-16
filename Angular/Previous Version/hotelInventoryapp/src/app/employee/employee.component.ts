import { Component, OnInit, Optional } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName = 'John';
  // constructor(private roomsService: RoomsService) {} // here it will not run beacuse there is only one instance of RoomsService is created. To access this. use providers propert in the @COmponent Decorator

  ngOnInit(): void {}
}
