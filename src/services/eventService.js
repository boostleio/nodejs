let events = [];
let nextEventId = 1;


export const createEventService = (organizerId, { name, location, date, capacity }) => {
    
    const newEvent = {
        id: nextEventId++,
        name,
        location,
        date,  
        capacity,  
        organizerId,
        attendees: []
    };
    events.push(newEvent);
    return newEvent;
};


export const getAllEventsService = () => {
    
    return events;
};


export const getEventByIdService = (eventId) => {
    return events.find(event => event.id === eventId);
};


export const updateEventService = (eventId, updates) => {
    const event = events.find(event => event.id === eventId);

    if (!event) {
        return null;
    }

    
    event.name = updates.name || event.name;
    event.location = updates.location || event.location;
    event.date = updates.date || event.date;
    event.capacity = updates.capacity || event.capacity;

    return event;
};


export const deleteEventService = (eventId) => {
    const eventIndex = events.findIndex(event => event.id === eventId);

    if (eventIndex === -1) {
        return false;
    }

    events.splice(eventIndex, 1);
    return true;
};
