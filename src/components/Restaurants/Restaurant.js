import React from "react";
import Spinner from "../common/Spinner";
import RestaurantList from "./RestaurantList";

const Restaurant = ({ restaurants, loading }) =>
  loading ? <Spinner /> : <RestaurantList restaurants={restaurants} />;
export default Restaurant;
