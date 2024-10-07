import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from '../services/userService.js';
import { validateUser } from '../utils/validate.js';


export const createUser = (req, res) => {
    const { name, email, password } = req.body;

    
    const validationError = validateUser({ name, email, password });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    const newUser = createUserService(name, email, password); 
    res.status(201).json(newUser);
};


export const getAllUsers = (req, res) => {
    const users = getAllUsersService();

    
    res.status(200).json(users);
};


export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = getUserByIdService(userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};


export const updateUser = (req, res) => {
    const { name, email, password } = req.body;
    const userId = parseInt(req.params.id);

    
    const updatedUser = updateUserService(userId, { name, email, password });

    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
};


export const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const isDeleted = deleteUserService(userId);

    if (!isDeleted) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(204).send();
};
