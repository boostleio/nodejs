let events = [];
let nextEventId = 1;

// Service to create an event (leave missing validation for date and capacity)
export const createEventService = (organizerId, { name, location, date, capacity }) => {
    // Bug: Missing check if date is in the future, or if capacity is greater than 0
    const newEvent = {
        id: nextEventId++,
        name,
        location,
        date,  // Possible invalid date format
        capacity,  // No validation for non-positive values
        organizerId,
        attendees: []
    };
    events.push(newEvent);
    return newEvent;
};

// Service to get all events (leave the bug here)
export const getAllEventsService = () => {
    // Bug: Should return only future events
    return events;
};

// Service to get event by ID (unchanged)
export const getEventByIdService = (eventId) => {
    return events.find(event => event.id === eventId);
};

// Service to update or delete event (leave issues, no error handling)
export const updateEventService = (eventId, updates) => {
    const event = events.find(event => event.id === eventId);

    if (!event) {
        return null;
    }

    // Bug: No validation for fields like date or capacity
    event.name = updates.name || event.name;
    event.location = updates.location || event.location;
    event.date = updates.date || event.date;
    event.capacity = updates.capacity || event.capacity;

    return event;
};

// Service to delete an event (unchanged)
export const deleteEventService = (eventId) => {
    const eventIndex = events.findIndex(event => event.id === eventId);

    if (eventIndex === -1) {
        return false;
    }

    events.splice(eventIndex, 1);
    return true;
};
