import { getEventByIdService } from './eventService.js';


export const registerForEventService = (userId, eventId) => {
    const event = getEventByIdService(eventId);

    
    if (!event) {
        throw new Error('Event not found');
    }

    event.attendees.push(userId);
    return { eventId, userId, status: 'Registered' };
};


export const unregisterForEventService = (userId, eventId) => {
    const event = getEventByIdService(eventId);

    if (!event) {
        throw new Error('Event not found');
    }

    
    const attendeeIndex = event.attendees.indexOf(userId);
    event.attendees.splice(attendeeIndex, 1);
};
