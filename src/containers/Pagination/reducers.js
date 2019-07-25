import { combineReducers } from "redux";
import { UPDATE_PAGE_INDEX, UPDATE_FETCHED_PAGE_INDEX } from "./actions";

export const initialState = {
  pageIndex: 0,
  fetchedPageIndex: 0
};

export const pageIndex = (
  state = initialState.pageIndex,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_PAGE_INDEX:
      return Math.max(0, payload.pageIndex);
    default:
      return state;
  }
};

export const fetchedPageIndex = (
  state = initialState.fetchedPageIndex,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_FETCHED_PAGE_INDEX:
      return payload.pageIndex;
    default:
      return state;
  }
};

export default combineReducers({
  pageIndex,
  fetchedPageIndex
});
