
export const authenticateUser = (req, res, next) => {
    
    req.user = { id: 1 };
    next();
};
