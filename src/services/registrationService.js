import { getEventByIdService } from './eventService.js';

// Register for an event (undo validations)
export const registerForEventService = (userId, eventId) => {
    const event = getEventByIdService(eventId);

    // Bug: No check if event is full or user is already registered
    if (!event) {
        throw new Error('Event not found');
    }

    event.attendees.push(userId);
    return { eventId, userId, status: 'Registered' };
};

// Unregister from an event (undo error handling)
export const unregisterForEventService = (userId, eventId) => {
    const event = getEventByIdService(eventId);

    if (!event) {
        throw new Error('Event not found');
    }

    // Bug: No check if user is registered
    const attendeeIndex = event.attendees.indexOf(userId);
    event.attendees.splice(attendeeIndex, 1);
};
