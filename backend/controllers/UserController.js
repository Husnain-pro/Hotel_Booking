import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';

const registerUser = async (req, res) => {
	try {
		const { name, email, password, confirmPassword } = req.body;
		console.log('name', name, 'email', email);
		const existUser = await User.findOne({ email });
		if (existUser) {
			return res.status(400).json({
				status: 'fail',
				message: 'User already exists'
			});
		}

		const user = await User.create({ name, email, password, confirmPassword });
		if (user) {
			res.status(200).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id)
			});
		} else {
			res.status(404).json({
				message: 'User not found'
			});
		}
	} catch (error) {
		res.status(404).json({
			status: 'fail',
			message: error.message
		});
	}
};

// @desc        Auth user & get token
// @route       POST /api/users/login
// @access      public

const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user && (await user.matchPassword(password))) {
			res.status(200).json({
				_id: user._id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id)
			});
		} else {
			res.status(400).json({
				status: 'fail',
				message: 'Invalid email or password'
			});
		}
	} catch (error) {
		res.status(404).json({
			status: 'error',
			message: error.message
		});
	}
};

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		if (users) {
			res.status(200).json({
				status: 'success',
				users
			});
		}
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
		console.error(error);
	}
};

export { registerUser, getAllUsers, userLogin };
