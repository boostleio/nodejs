import { createEventService, getEventByIdService, getAllEventsService, updateEventService, deleteEventService } from '../services/eventService.js';
import { validateEvent } from '../utils/validate.js';
import { authenticateUser } from '../utils/authMiddleware.js';


export const createEvent = (req, res) => {
    const { name, location, date, capacity } = req.body;
    const organizerId = req.user.id; 

    
    const validationError = validateEvent({ name, location, date, capacity });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    const newEvent = createEventService(organizerId, { name, location, date, capacity });

    res.status(201).json(newEvent);
};


export const getAllEvents = (req, res) => {
    const events = getAllEventsService();

    
    res.json(events);
};


export const getEventById = (req, res) => {
    const eventId = parseInt(req.params.id);
    const event = getEventByIdService(eventId);

    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
};


export const updateEvent = (req, res) => {
    const eventId = parseInt(req.params.id);
    const { name, location, date, capacity } = req.body;

    
    const updatedEvent = updateEventService(eventId, { name, location, date, capacity });

    if (!updatedEvent) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.json(updatedEvent);
};


export const deleteEvent = (req, res) => {
    const eventId = parseInt(req.params.id);
    const isDeleted = deleteEventService(eventId);

    if (!isDeleted) {
        return res.status(404).json({ message: "Event not found" });
    }

    res.status(204).send();
};
