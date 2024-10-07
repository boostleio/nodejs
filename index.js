import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/userRoutes.js';
import eventRoutes from './src/routes/eventRoutes.js';
import registrationRoutes from './src/routes/registrationRoutes.js';

const app = express();
app.use(bodyParser.json());

// Define routes
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
