import { combineReducers } from "redux";
import { UPDATE_PAGE_INDEX } from "./actions";
import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS } from "../CardGrid/actions";
import { NUMBER_PER_PAGE } from "../../utils/constants";

const initialState = {
  pageIndex: 0,
  pageCount: 0,
  fetchedPageIndex: 0
};

const pageIndex = (state = initialState.pageIndex, { type, payload }) => {
  switch (type) {
    case UPDATE_PAGE_INDEX:
      return Math.max(0, payload.pageIndex);
    default:
      return state;
  }
};

const pageCount = (state = initialState.pageCount, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS_SUCCESS:
      return payload.total / NUMBER_PER_PAGE;
    default:
      return state;
  }
};

const fetchedPageIndex = (
  state = initialState.fetchedPageIndex,
  { type, payload }
) => {
  switch (type) {
    case FETCH_CARDS_REQUEST:
      return 0;
    default:
      return state;
  }
};

export default combineReducers({
  pageIndex,
  pageCount,
  fetchedPageIndex
});
