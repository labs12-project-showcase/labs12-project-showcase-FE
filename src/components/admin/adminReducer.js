import {
  ADMIN_FETCHED_STUDENTS
} from "./adminActions";

const initialState = {
  students = []
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FETCHED_STUDENTS:
      return {
        ...state,
        students: action.payload
      }
    default:
      return state;
  }
};

export default adminReducer;