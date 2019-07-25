export const FETCH_CARDS_REQUEST = "FETCH_CARDS_REQUEST";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";
export const UPDATE_TOTAL_COUNT = "UPDATE_TOTAL_COUNT";
export const CLICK_NEXT_PAGE = "CLICK_NEXT_PAGE";
export const CLICK_PREV_PAGE = "CLICK_PREV_PAGE";
export const OPEN_CARD = "OPEN_CARD";
export const CLOSE_CARD = "CLOSE_CARD";

export const fetchCardsRequest = ({ pageIndex, perPage }) => ({
  type: FETCH_CARDS_REQUEST,
  payload: {
    pageIndex,
    perPage
  }
});

export const fetchCardsSuccess = ({ ids, entities }) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: {
    ids,
    entities
  }
});

export const fetchCardsFailure = ({
  errorMessage = "Server Internal Error"
}) => ({
  type: FETCH_CARDS_FAILURE,
  payload: {
    message: errorMessage
  }
});

export const openCard = id => ({
  type: OPEN_CARD,
  payload: { id }
});

export const updateTotalCount = total => ({
  type: UPDATE_TOTAL_COUNT,
  payload: {
    total
  }
});
