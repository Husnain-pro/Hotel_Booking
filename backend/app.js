import cors from 'cors';
import express from 'express';
import HotelRoute from './routes/HotelRoute.js';
import UserRoute from './routes/UserRoute.js';

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cors());
app.use('/api/hotels', HotelRoute);
app.use('/api/users', UserRoute);

export default app;
