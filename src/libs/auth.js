import axios from "axios";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

console.log("-- CLIENT_ID", CLIENT_ID);
console.log("-- CLIENT_SECRET", CLIENT_SECRET);

export default async function getAccessToken() {
  try {
    const response = axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          grant_type: "client_credentials",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }
      }
    );

    return response.json();
  } catch (e) {
    console.error(e);
  }
}
