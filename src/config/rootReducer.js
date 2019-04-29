import { combineReducers } from 'redux';

import authReducer from '../auth/authReducer.js';
import homeReducer from '../components/home/homeReducer.js';
import registerReducer from '../components/register/registerReducer.js';
import adminDashboardReducer from '../components/admin/dashboard/adminDashboardReducer.js';
import studentDashboardReducer from '../components/student/dashboard/studentDashboardReducer.js';

export default combineReducers({
  auth: authReducer,
  home: homeReducer,
  register: registerReducer,
  adminDashboard: adminDashboardReducer,
  studentDashboard: studentDashboardReducer
});