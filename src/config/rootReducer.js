import { combineReducers } from 'redux';

import homeReducer from '../components/home/homeReducer.js';
import registerReducer from '../components/register/registerReducer.js';
import adminDashboardReducer from '../components/admin/dashboard/adminDashboardReducer.js';
import studentDashboardReducer from '../components/student/dashboard/studentDashboardReducer.js';

export default combineReducers({
  home: homeReducer,
  register: registerReducer,
  adminDashboard: adminDashboardReducer,
  studentDashboard: studentDashboardReducer
});