import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from '../services/userService.js';
import { validateUser } from '../utils/validate.js';

// Controller for creating a user
export const createUser = (req, res) => {
    const { name, email, password } = req.body;

    // Bug: Missing validation for the password length, or check if email is in use already
    const validationError = validateUser({ name, email, password });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    const newUser = createUserService(name, email, password); // Possible bug: No error handling for duplicate emails
    res.status(201).json(newUser);
};

// Controller for getting all users (leave this to candidate)
export const getAllUsers = (req, res) => {
    const users = getAllUsersService();

    // Bug: No handling of empty user list
    res.status(200).json(users);
};

// Get User by ID (leave unchanged)
export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = getUserByIdService(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};

// Update User by ID (leave validation issues)
export const updateUser = (req, res) => {
    const { name, email, password } = req.body;
    const userId = parseInt(req.params.id);

    // Bug: Missing validation for password length or email format
    const updatedUser = updateUserService(userId, { name, email, password });

    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
};

// Delete User (leave unchanged)
export const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const isDeleted = deleteUserService(userId);

    if (!isDeleted) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(204).send();
};
