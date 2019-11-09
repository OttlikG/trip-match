import Unsplash from "unsplash-js";
import { listFlightDestination } from "../../../libs/flight-destination";
import { SET_FLIGHT_DESTINATION } from "./constants";

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY
});

export const setFlightDestination = data => ({
  type: SET_FLIGHT_DESTINATION,
  payload: data
});

export function fetchFlightDestination() {
  return async dispatch => {
    const data = await listFlightDestination();
    console.log("-- data", data);
    // const images = data.map(image => image.urls)
    // console.log('-- images', images)
    // dispatch(setImages(images))
  };
}

export function fetchImageForDestination(destination) {
  return async dispatch => {};
}
