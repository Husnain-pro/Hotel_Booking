import Hotel from '../models/HotelModel.js';

const createHotel = async (req, res) => {
	try {
		const hotel = await Hotel.create(req.body);

		res.status(200).json({
			status: 'success',
			data: hotel
		});
	} catch (error) {
		res.status(404),
			json({
				message: error.message
			});
	}
};

const hotels = async (req, res) => {
	try {
		console.log('object find');
		const hotel = await Hotel.find();
		console.log('object find', hotel);
		res.status(200).json({
			status: 'success',
			data: hotel
		});
	} catch (error) {
		console.log('error', error);
	}
};

export { createHotel, hotels };
