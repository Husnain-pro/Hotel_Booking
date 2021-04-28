import express from 'express';
import {
	createHotel,
	deleteHotel,
	featureHotel,
	getAllhotels,
	getOneHotel,
	updateHotel
} from '../controllers/HotelController.js';

const router = express.Router();

router.route('/').post(createHotel).get(getAllhotels);
router.route('/feature').get(featureHotel);
router.route('/:id').get(getOneHotel).delete(deleteHotel).put(updateHotel);
export default router;
