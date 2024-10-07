import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { authenticateUser } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateUser, createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', authenticateUser, updateEvent);
router.delete('/:id', authenticateUser, deleteEvent);

export default router;