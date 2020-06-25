import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import {
  loadRestaurants,
  filterRestaurants,
} from "./actions/restaurantActions";

it("Should handle filter data with store", function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const restaurants = [];

  // act
  const action = filterRestaurants("bar");

  store.dispatch(action);

  // assert
  const filterRestaurant = store.getState().restaurants;
  expect(filterRestaurant).toEqual(restaurants);
});
