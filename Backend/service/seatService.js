
const seats = require('../data/seats');
const Seat = require('../Model/Seat');

class SeatService {
  getAllSeats() {
    return seats;
  }

  getSeatById(id) {
    return seats.find(seat => seat.id === id);
  }

  createSeat(screenNumber, seatNumber, isOccupied) {
    const newSeat = new Seat(seats.length + 1, screenNumber, seatNumber, isOccupied);
    seats.push(newSeat);
    return newSeat;
  }

  updateSeat(id, screenNumber, seatNumber, isOccupied) {
    const seatIndex = seats.findIndex(seat => seat.id === id);
    if (seatIndex !== -1) {
      seats[seatIndex] = new Seat(id, screenNumber, seatNumber, isOccupied);
      return seats[seatIndex];
    }
    return null;
  }

  deleteSeat(id) {
    const seatIndex = seats.findIndex(seat => seat.id === id);
    if (seatIndex !== -1) {
      seats.splice(seatIndex, 1);
      return true;
    }
    return false;
  }
}

module.exports = new SeatService();
