import express from 'express';
import { getAllUsers, registerUser, userLogin } from '../controllers/UserController.js';
const router = express.Router();

router.route('/').post(registerUser).get(getAllUsers);
router.route('/login').post(userLogin);
export default router;
