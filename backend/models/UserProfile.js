import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A User must have name']
	},
	image: {
		type: String,
		required: [true, 'A user must have image']
	},
	address: {
		type: String,
		required: [true, 'A user must have address']
	},
	phoneNumber: {
		type: Number,
		required: [true, 'A user must have phone Number']
	},
	CNIC: {
		type: String,
		required: [true, 'A user must have CNIC']
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}
});

const Profile = mongoose.model('Profie', profileSchema);

export default Profile;
