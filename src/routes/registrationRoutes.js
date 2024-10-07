import express from 'express';
import { registerForEvent, unregisterFromEvent } from '../controllers/registrationController.js';
import { authenticateUser } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/:eventId/register', authenticateUser, registerForEvent);
router.delete('/:eventId/unregister', authenticateUser, unregisterFromEvent);

export default router;