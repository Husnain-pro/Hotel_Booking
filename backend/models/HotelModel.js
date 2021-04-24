import mongoose from 'mongoose';

const hotelSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'A hotel must have name']
		},
		description: {
			type: String,
			required: [true, 'A hotel must have description']
			// max: [30, 'Description must be less than 30 characters']
		},
		location: { type: String, required: [true, 'A hotel must have location'] },
		price: { type: Number, required: [true, 'A hotel must have price'] },
		image: { type: String, required: [true, 'A hotel must have image'] },
		detailImage: [
			{
				type: String
			}
		],
		gallery: [
			{
				type: String
			}
		],
		createdAt: { type: Date, default: Date.now() }
	},
	{
		timestamps: true
	}
);

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
