import { combineReducers } from "redux";
import cardReducer from "./containers/CardGrid/reducers";
import paginationReducer from "./containers/Pagination/reducers";
import { isDrawerOpen } from "./containers/Drawer/reducers";

const rootReducer = combineReducers({
  cards: cardReducer,
  pagination: paginationReducer,
  ui: combineReducers({ isDrawerOpen })
});

export default rootReducer;
