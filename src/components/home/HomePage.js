import React, { useState } from "react";
import { connect } from "react-redux";
import Restaurant from "./../Restaurants/Restaurant";
import Search from "../SearchBar/Search";
import {
  loadRestaurants,
  filterRestaurants,
} from "./../../redux/actions/restaurantActions";

const HomePage = ({ loadRestaurants, filterRestaurants, restaurants }) => {
  const [loading, setLoading] = useState(false);

  function searchRestaurant(text) {
    //loading animation
    loadRestaurants(text)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        alert("Loading authors failed" + error);
      });

    setLoading(true);
  }

  function filterRestaurant(text) {
    //loading animation
    filterRestaurants(text);
  }

  return (
    <div className="container">
      <Search
        searchRestaurant={searchRestaurant}
        filterRestaurant={filterRestaurant}
      />
      {!loading && <Restaurant loading={loading} restaurants={restaurants} />}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    restaurants: state.restaurant,
  };
}

const mapDispatchToProps = {
  loadRestaurants,
  filterRestaurants,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
