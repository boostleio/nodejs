// Mock middleware to simulate authentication
export const authenticateUser = (req, res, next) => {
    // Assume user is authenticated with id 1 for now
    req.user = { id: 1 };
    next();
};
