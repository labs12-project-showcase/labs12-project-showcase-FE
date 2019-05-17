import {
  GET_FILTERED_CARDS_FAILURE,
  GET_FILTERED_CARDS_START,
  GET_FILTERED_CARDS_SUCCESS,
  GET_INITIAL_CARDS_FAILURE,
  GET_INITIAL_CARDS_START,
  GET_INITIAL_CARDS_SUCCESS
} from "./FilterSearchActions";

const initialState = {
  cards: [],
  error: null,
  isFetchingCards: false
};

const FilterSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_CARDS_START:
      return {
        ...state,
        isFetchingCards: true
      };
    case GET_FILTERED_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        error: null,
        isFetchingCards: false
      };
    case GET_FILTERED_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingCards: false
      };
    case GET_INITIAL_CARDS_START:
      return {
        ...state,
        error: null,
        isFetchingCards: true
      };
    case GET_INITIAL_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        error: null,
        isFetchingCards: false
      };
    case GET_INITIAL_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingCards: false
      };
    default:
      return state;
  }
};

export default FilterSearchReducer;
