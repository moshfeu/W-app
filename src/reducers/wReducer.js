import { FETCH_WEATHER } from "../actions/actionTypes";

const initialState = {
  weather: {},
};

const wReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};
export default wReducer;
