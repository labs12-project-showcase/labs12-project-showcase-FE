import { combineReducers } from 'redux';

import authReducer from '../auth/authReducer.js';
import homeReducer from '../components/home/homeReducer.js';
import registerReducer from '../components/register/registerReducer.js';
import adminDashboardReducer from '../components/admin/dashboard/adminDashboardReducer.js';
import studentDashboardReducer from '../components/student/dashboard/studentDashboardReducer.js';
import profileReducer from '../components/student/profileqs/profileqsReducer';
import projectReducer from '../components/student/projectqs/projectqsReducer';

export default combineReducers({
  adminDashboard: adminDashboardReducer,
  auth: authReducer,
  home: homeReducer,
  profile: profileReducer,
  register: registerReducer,
  studentDashboard: studentDashboardReducer,
  project: projectReducer
});
