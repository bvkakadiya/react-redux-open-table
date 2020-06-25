import { combineReducers } from "redux";
import restaurant from "./restaurantReducer";

const rootReducer = combineReducers({
  restaurant,
});

export default rootReducer;
