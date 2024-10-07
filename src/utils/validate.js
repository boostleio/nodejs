
export const validateEvent = ({ name, location, date, capacity }) => {
    if (!name || !location || !date || !capacity) {
        return "All fields (name, location, date, capacity) are required";
    }
    
    return null;
};


export const validateUser = ({ name, email, password }) => {
    if (!name || !email || !password) {
        return "Name, email, and password are required";
    }

    
    return null;
};
