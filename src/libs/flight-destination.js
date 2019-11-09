import axios from "axios";
import getAccessToken from "./auth";

const url =
  "https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=LON";
let accessToken;

export async function listFlightDestination() {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (response.status === 401) {
      accessToken = await getAccessToken();
    }

    console.log("-- test", response.json());
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default {};
