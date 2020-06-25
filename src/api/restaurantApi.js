import { handleResponse, handleError } from "./apiUtils";

export function getRestaurantsByCity(cityName) {
  return fetch(
    `https://opentable.herokuapp.com/api/restaurants?city=${cityName}`
  )
    .then(handleResponse)
    .catch(handleError);
}
