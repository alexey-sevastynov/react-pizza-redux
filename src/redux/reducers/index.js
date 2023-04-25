import { combineReducers } from "redux";

import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import basketReducer from "./basket";

const rootReducer = combineReducers({
  basket: basketReducer,
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
