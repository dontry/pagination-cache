import { OPEN_CARD, CLOSE_CARD } from "../CardGrid/actions";
import { TOGGLE_DRAWER } from "./actions";

const initialState = {
  isOpen: false
};

export const isDrawerOpen = (
  state = initialState.isOpen,
  { type, payload }
) => {
  switch (type) {
    case OPEN_CARD:
      return true;
    case CLOSE_CARD:
      return false;
    case TOGGLE_DRAWER:
      return payload.isOpen;
    default:
      return state;
  }
};
