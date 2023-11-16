export interface RoomsAvailability {
  totalRooms?: number;
  bookedRooms?: number;
  availableRooms?: number;
}

export interface RoomDetails {
  roomNumber: number;
  roomType: string;
  amenties: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating: number;
}

// export class RoomsDTO {
//   roomNumber?: number;
//   roomType: string;
//   amenities: string;
//   price: number;
//   photos: string;
//   checkinTime: Date;
//   checkoutTime: Date;
//   rating: number;
// }
