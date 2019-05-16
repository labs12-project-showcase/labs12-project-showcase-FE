import { combineReducers } from "redux";

import adminReducer from "../components/admin/adminReducer";
import adminDashboardReducer from "../components/admin/dashboard/adminDashboardReducer.js";
import authReducer from "../auth/authReducer.js";
import filterSearchReducer from '../components/FilterSearch/FilterSearchReducer';
import homeReducer from "../components/home/homeReducer.js";
import mapboxMapReducer from "../components/mapboxMap/mapboxMapReducer";
import profileReducer from "../components/student/profileqs/profileqsReducer";
import projectReducer from "../components/student/projectqs/projectqsReducer";
import studentProfileReducer from "../components/student/profile/studentProfileReducer.js";

export default combineReducers({
  admin: adminReducer,
  adminDashboard: adminDashboardReducer,
  auth: authReducer,
  home: homeReducer,
  filterSearch: filterSearchReducer,
  mapboxMap: mapboxMapReducer,
  profile: profileReducer,
  project: projectReducer,
  studentProfile: studentProfileReducer
});
