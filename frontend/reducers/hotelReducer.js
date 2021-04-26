import { HOTEL_ROOM_LIST_FAIL, HOTEL_ROOM_LIST_REQUEST, HOTEL_ROOM_LIST_SUCCESS } from '../constants/hotelConstant';

export const hotelRoomListReducer = (state = { rooms: [] }, { type, payload }) => {
	switch (type) {
		case HOTEL_ROOM_LIST_REQUEST:
			console.log('reducer request');
			return { loading: true, rooms: [{ name: 'husnain' }] };
		case HOTEL_ROOM_LIST_SUCCESS:
			console.log('reducer success');
			return { loading: false, rooms: payload.data };
		case HOTEL_ROOM_LIST_FAIL:
			return { loading: false, error: payload };
		default:
			return state;
	}
};
