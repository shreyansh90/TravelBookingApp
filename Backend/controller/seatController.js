const express = require('express');
const seatService = require('../service/seatService');
const Seat = require('../Model/Seat');

const router = express.Router();

// Get all seats
router.get('/', (req, res) => {
  const allSeats = seatService.getAllSeats();
  res.json(allSeats);
});

// Get a single seat
router.get('/:id', (req, res) => {
  const seatId = parseInt(req.params.id);
  const seat = seatService.getSeatById(seatId);
  if (seat) {
    res.json(seat);
  } else {
    res.status(404).json({ error: 'Seat not found' });
  }
});

// Create a seat
router.post('/', (req, res) => {
  const { screenNumber, seatNumber, isOccupied } = req.body;
  const newSeat = seatService.createSeat(screenNumber, seatNumber, isOccupied);
  res.status(201).json(newSeat);
});

// Update a seat
router.put('/:id', (req, res) => {
  const seatId = parseInt(req.params.id);
  const { screenNumber, seatNumber, isOccupied } = req.body;
  const updatedSeat = seatService.updateSeat(seatId, screenNumber, seatNumber, isOccupied);
  if (updatedSeat) {
    res.json(updatedSeat);
  } else {
    res.status(404).json({ error: 'Seat not found' });
  }
});

// Delete a seat
router.delete('/:id', (req, res) => {
  const seatId = parseInt(req.params.id);
  const isDeleted = seatService.deleteSeat(seatId);
  if (isDeleted) {
    res.json({ message: 'Seat deleted successfully' });
  } else {
    res.status(404).json({ error: 'Seat not found' });
  }
});

module.exports = router;
