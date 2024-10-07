// Event validation
export const validateEvent = ({ name, location, date, capacity }) => {
    if (!name || !location || !date || !capacity) {
        return "All fields (name, location, date, capacity) are required";
    }
    // Bug: No validation for the date format, or capacity > 0
    return null;
};

// User validation (leave issues)
export const validateUser = ({ name, email, password }) => {
    if (!name || !email || !password) {
        return "Name, email, and password are required";
    }

    // Bug: No validation for email format or password strength
    return null;
};
