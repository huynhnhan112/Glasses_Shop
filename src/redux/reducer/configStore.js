import {combineReducers, createStore} from 'redux';
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer';
import BaiTapGameXucXacReducer from './BaiTapGameXucXacReducer';
import BaiTapBookingTicketReducer from './BaiTapBookingTicketReducer';

const rootReducer = combineReducers({
    // Lưu state ứng dụng
    BaiTapOanTuXiReducer,
    BaiTapGameXucXacReducer,
    BaiTapBookingTicketReducer
});


export const store = createStore(rootReducer);