import { registerForEventService, unregisterForEventService } from '../services/registrationService.js';


export const registerForEvent = (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const userId = req.user.id;  

    try {
        const registration = registerForEventService(userId, eventId);

        
        res.status(201).json(registration);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


export const unregisterFromEvent = (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const userId = req.user.id;  

    try {
        unregisterForEventService(userId, eventId);

        
        res.status(204).send();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};