import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';

// if providedIn propert is not provided or removed, the nullInjector will be called
@Injectable({
  providedIn: 'root', // creates only one instance, that is why you cannot get it in multiple components
})
export class RoomsService {
  roomDetails: RoomDetails[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('API: ', this.config.apiEndpont);
    console.log('Rooms Service Initiallized');
  }
  getRooms() {
    return this.roomDetails;
  }
}
