import { combineReducers } from 'redux';

import homeReducer from '../components/home/homeReducer.js';
import registerReducer from '../components/register/registerReducer.js';
import adminDashboardReducer from '../components/admin/dashboard/adminDashboardReducer.js';
import studentDashboardReducer from '../components/student/dashboard/studentDashboardReducer.js';
import profileReducer from '../components/student/profileqs/profileqsReducer';

export default combineReducers({
  adminDashboard: adminDashboardReducer,
  home: homeReducer,
  profile: profileReducer,
  register: registerReducer,
  studentDashboard: studentDashboardReducer
});
