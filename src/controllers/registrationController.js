import { registerForEventService, unregisterForEventService } from '../services/registrationService.js';

// Register for an event (leave error handling issues)
export const registerForEvent = (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const userId = req.user.id;  // authenticated user

    try {
        const registration = registerForEventService(userId, eventId);

        // Bug: No handling if event is full or already registered
        res.status(201).json(registration);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Unregister from an event (leave error handling issues)
export const unregisterFromEvent = (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const userId = req.user.id;  // authenticated user

    try {
        unregisterForEventService(userId, eventId);

        // Bug: No handling if user wasn't registered
        res.status(204).send();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
