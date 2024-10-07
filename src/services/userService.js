let users = [];
let nextId = 1;

// Service to create a user
export const createUserService = (name, email, age) => {
    // Check if email is already taken
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        throw new Error('Email is already in use');
    }

    const newUser = { id: nextId++, name, email, age: age || null };
    users.push(newUser);
    return newUser;
};

// Service to get all users
export const getAllUsersService = () => {
    return users;
};

// Service to get a user by ID
export const getUserByIdService = (userId) => {
    return users.find(user => user.id === userId);
};

// Service to update a user
export const updateUserService = (userId, updates) => {
    const user = users.find(user => user.id === userId);

    if (!user) {
        return null;
    }

    // Update fields if provided
    user.name = updates.name || user.name;
    user.email = updates.email || user.email;
    user.age = updates.age || user.age;

    return user;
};

// Service to delete a user by ID
export const deleteUserService = (userId) => {
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return false;
    }

    users.splice(userIndex, 1);
    return true;
};
