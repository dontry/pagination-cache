import { combineReducers } from "redux";
import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_SUCCESS,
  UPDATE_TOTAL_COUNT,
  OPEN_CARD
} from "./actions";

export const initialState = {
  ids: [],
  entities: {},
  isFetching: false,
  errorMessage: "",
  totalCount: 0,
  activeCardId: null
};

export const ids = (state = initialState.ids, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS_SUCCESS:
      return [...state, ...payload.ids];
    default:
      return state;
  }
};

export const entities = (state = initialState.entities, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS_SUCCESS:
      return { ...state, ...payload.entities };
    default:
      return state;
  }
};

export const totalCount = (
  state = initialState.totalCount,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_TOTAL_COUNT:
      return Math.max(payload.total, 0);
    default:
      return state;
  }
};

export const isFetching = (
  state = initialState.isFetching,
  { type, payload }
) => {
  switch (type) {
    case FETCH_CARDS_REQUEST:
      return true;
    case FETCH_CARDS_FAILURE:
    case FETCH_CARDS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const activeCardId = (state = initialState.activeCardId, { type, payload }) => {
  switch (type) {
    case OPEN_CARD:
      return payload.id;
    default:
      return state;
  }
};

const errorMessage = (state = initialState.errorMessage, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS_FAILURE:
      return payload.message;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  entities,
  totalCount,
  activeCardId,
  isFetching,
  errorMessage
});
