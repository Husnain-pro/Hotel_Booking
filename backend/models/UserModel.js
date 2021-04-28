import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'A user have name']
		},
		email: {
			type: String,
			required: [true, 'A user have email']
		},
		password: {
			type: String,
			required: [true, 'A user have password']
		},
		confirmPassword: {
			type: String,
			required: [true, 'A user have confirmPassword'],
			validate: {
				// This only works in create and save
				validator: function (el) {
					return el === this.password;
				},
				message: 'Password are not same'
			}
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	{
		timestamps: true
	}
);

userSchema.methods.matchPassword = function (enteredPassword) {
	return bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
