import { createEventService, getEventByIdService, getAllEventsService, updateEventService, deleteEventService } from '../services/eventService.js';
import { validateEvent } from '../utils/validate.js';
import { authenticateUser } from '../utils/authMiddleware.js';

// Create event (add missing validations)
export const createEvent = (req, res) => {
    const { name, location, date, capacity } = req.body;
    const organizerId = req.user.id; // authenticated user

    // Bug: Missing capacity validation (no check if capacity is a positive number)
    const validationError = validateEvent({ name, location, date, capacity });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    const newEvent = createEventService(organizerId, { name, location, date, capacity });

    res.status(201).json(newEvent);
};

// Get all events (bug in filtering, leave for candidate)
export const getAllEvents = (req, res) => {
    const events = getAllEventsService();

    // Bug: No filtering by date (should return only future events)
    res.json(events);
};

// Get event by ID (leave unchanged)
export const getEventById = (req, res) => {
    const eventId = parseInt(req.params.id);
    const event = getEventByIdService(eventId);

    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
};

// Update and Delete Event (leave validation issues)
export const updateEvent = (req, res) => {
    const eventId = parseInt(req.params.id);
    const { name, location, date, capacity } = req.body;

    // Bug: No validation for capacity, no error handling for date format
    const updatedEvent = updateEventService(eventId, { name, location, date, capacity });

    if (!updatedEvent) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.json(updatedEvent);
};

// Delete Event (leave unchanged)
export const deleteEvent = (req, res) => {
    const eventId = parseInt(req.params.id);
    const isDeleted = deleteEventService(eventId);

    if (!isDeleted) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.status(204).send();
};
