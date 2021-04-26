import axios from 'axios';
import { HOTEL_ROOM_LIST_FAIL, HOTEL_ROOM_LIST_REQUEST, HOTEL_ROOM_LIST_SUCCESS } from '../constants/hotelConstant';

export const listRooms = () => async (dispatch) => {
	console.log('hello world');
	try {
		dispatch({ type: HOTEL_ROOM_LIST_REQUEST });
		const { data } = await axios.get('/api/hotels');
		console.log('action data', data);
		dispatch({ type: HOTEL_ROOM_LIST_SUCCESS, payload: data });
	} catch (error) {
		console.log('error in action');
		dispatch({
			type: HOTEL_ROOM_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
