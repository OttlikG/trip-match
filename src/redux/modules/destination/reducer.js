import { SET_FLIGHT_DESTINATION } from "./constants";

const initialState = {
  flightDestinations: []
};

export default function gallery(state = initialState, action) {
  switch (action.type) {
    case SET_FLIGHT_DESTINATION:
      console.log("SET_IMAGES", action.payload);
      return {
        ...state,
        images: action.payload
      };
    default:
      return state;
  }
}
