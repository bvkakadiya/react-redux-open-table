import * as types from "./actionTypes";
import * as restaurantApi from "../../api/restaurantApi";

export function loadRestaurants(city) {
  return function (dispatch) {
    return restaurantApi
      .getRestaurantsByCity(city)
      .then(({ restaurants }) => {
        dispatch(loadRestaurantSuccess(restaurants));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadRestaurantSuccess(restaurants) {
  return { type: types.LOAD_RESTAURANT_SUCCESS, restaurants };
}

export function filterRestaurants(filterText) {
  return { type: types.FILTER_RESTAURANT, filterText };
}
