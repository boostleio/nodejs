let users = [];
let nextId = 1;


export const createUserService = (name, email, age) => {
    
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        throw new Error('Email is already in use');
    }

    const newUser = { id: nextId++, name, email, age: age || null };
    users.push(newUser);
    return newUser;
};


export const getAllUsersService = () => {
    return users;
};


export const getUserByIdService = (userId) => {
    return users.find(user => user.id === userId);
};


export const updateUserService = (userId, updates) => {
    const user = users.find(user => user.id === userId);

    if (!user) {
        return null;
    }

    
    user.name = updates.name || user.name;
    user.email = updates.email || user.email;
    user.age = updates.age || user.age;

    return user;
};


export const deleteUserService = (userId) => {
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return false;
    }

    users.splice(userIndex, 1);
    return true;
};
