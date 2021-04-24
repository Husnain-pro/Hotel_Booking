import express from 'express';
import { createHotel, hotels } from '../controllers/HotelController.js';

const router = express.Router();

router.route('/').post(createHotel).get(hotels);

export default router;
