import Hotel from '../models/HotelModel.js';

// @desc        Get All hotels
// @route       GET /api/hotels/
// @access      Public

const getAllhotels = async (req, res) => {
	try {
		const hotel = await Hotel.find();
		res.status(200).json({
			status: 'success',
			data: hotel
		});
	} catch (error) {
		console.log('error', error);
	}
};

// @desc        Get One hotels
// @route       GET /api/hotels/:id
// @access      Public

const getOneHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: hotel
		});
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error.message
		});
	}
};

// @desc        Delte hotel
// @route       DELETE /api/hotels/:id
// @access      Private Admin

const deleteHotel = async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: 'success',
			message: 'Hotel successfully deleted'
		});
	} catch (error) {
		res.status(404).json({
			status: 'error',
			message: error.message
		});
	}
};

// @desc        Update hotel
// @route       PUT /api/hotels/:id
// @access      Private Admin

const updateHotel = async (req, res) => {
	try {
		const { name, description, location, price, image, detailImage, gallery } = req.body;
		let hotel = await Hotel.findById(req.params.id);
		if (hotel) {
			hotel.name = name || hotel.name;
			hotel.description = description || hotel.description;
			hotel.location = location || hotel.location;
			hotel.price = price || hotel.price;
			hotel.image = image || hotel.image;
			hotel.detailImage = detailImage || hotel.detailImage;
			hotel.gallery = gallery || hotel.gallery;
			const updatedHotel = await hotel.save();
			res.status(200).json({
				status: 'success',
				data: updatedHotel
			});
		} else {
			res.status(404).json({
				status: 'error',
				message: 'hotel not found'
			});
		}
	} catch (error) {
		console.error(error.message);
	}
};

// @desc        CREATE hotel
// @route       POST /api/hotels/
// @access      Private Admin

const createHotel = async (req, res) => {
	try {
		const hotel = await Hotel.create(req.body);

		res.status(200).json({
			status: 'success',
			data: hotel
		});
	} catch (error) {
		res.status(404).json({
			message: error.message
		});
	}
};

export { createHotel, getAllhotels, getOneHotel, deleteHotel, updateHotel };
