import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_RESTAURANT_SUCCESS:
      return { ...state, restaurants: action.restaurants };
    case types.FILTER_RESTAURANT:
      let value = action.filterText.toLowerCase();
      let filteredValues = state.restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(value) ||
          restaurant.address.toLowerCase().includes(value) ||
          restaurant.area.toLowerCase().includes(value)
      );
      return {
        ...state,
        filteredRestaurants: {
          filterText: value,
          listFilteredOfRestaurant: filteredValues,
        },
      };

    default:
      return state;
  }
}
