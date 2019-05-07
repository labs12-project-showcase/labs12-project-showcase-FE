import { combineReducers } from "redux";

import authReducer from "../auth/authReducer.js";
import homeReducer from "../components/home/homeReducer.js";
import registerReducer from "../components/register/registerReducer.js";
import adminDashboardReducer from "../components/admin/dashboard/adminDashboardReducer.js";
import studentProfileReducer from "../components/student/profile/studentProfileReducer.js";
import profileReducer from "../components/student/profileqs/profileqsReducer";
import projectReducer from "../components/student/projectqs/projectqsReducer";
import adminReducer from "../components/admin/adminReducer";

export default combineReducers({
  adminDashboard: adminDashboardReducer,
  auth: authReducer,
  home: homeReducer,
  profile: profileReducer,
  register: registerReducer,
  project: projectReducer,
  studentProfile: studentProfileReducer,
  admin: adminReducer
});
