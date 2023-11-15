export interface RoomsAvailability {
  totalRooms?: number;
  bookedRooms?: number;
  availableRooms?: number;
}

export interface RoomDetials {
  roomNumber: number;
  roomType: string;
  amenties: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating: number;
}
