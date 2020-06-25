import React from "react";
const RestaurantList = ({ restaurants }) => {
  let filteredList = restaurants.filteredRestaurants;
  let showRestaurantList =
    filteredList.listFilteredOfRestaurant.length > 0 ||
    filteredList.filterText.length > 0
      ? filteredList.listFilteredOfRestaurant
      : restaurants.restaurants;
  console.log(showRestaurantList.length);
  return (
    <table className="table restaurant-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {showRestaurantList &&
          showRestaurantList.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.address}</td>
              <td>{restaurant.price}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;
