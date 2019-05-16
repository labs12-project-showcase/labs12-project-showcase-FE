import {
  FETCHED_MAP_DATA_START,
  FETCHED_MAP_DATA_SUCCESS,
  FETCHED_MAP_DATA_FAILURE
} from "./mapboxMapActions";

const initialState = {
  mapData: [],
  fetchingMapData: false
};

const mapboxMapReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_MAP_DATA_START:
      return {
        ...state,
        fetchingMapData: true
      };
    case FETCHED_MAP_DATA_SUCCESS:
      return {
        ...state,
        mapData: action.payload,
        fetchingMapData: false
      };
    case FETCHED_MAP_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default mapboxMapReducer;
