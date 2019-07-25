import { call, put, select, all, takeLeading } from "redux-saga/effects";
import { updateFetchedPageIndex, UPDATE_PAGE_INDEX } from "./actions";
import {
  FETCH_CARDS_REQUEST,
  fetchCardsSuccess,
  fetchCardsFailure,
  updateTotalCount
} from "../CardGrid/actions";
import api from "../../utils/api";
import {
  CARD_COUNT_PER_REQUEST,
  CARD_COUNT_PER_PAGE
} from "../../utils/constants";
import {
  selectTotalCount,
  selectCachedCount,
  selectIsFetching
} from "../CardGrid/selectors";
import { selectFetchedPageIndex, selectPageIndex } from "./selectors";

export function* fetchCards(action) {
  const fetchedPageIndex = yield select(selectFetchedPageIndex);
  const currentPageIndex = yield select(selectPageIndex);
  const cachedCount = yield select(selectCachedCount);
  const totalCount = yield select(selectTotalCount);
  const isFetching = yield select(selectIsFetching);
  const shouldMakeRequest = shouldMakeFetchRequest({
    isFetching,
    totalCount,
    cachedCount,
    currentPageIndex
  });

  console.log("should make request:", shouldMakeRequest);
  if (shouldMakeRequest) {
    yield put({ type: FETCH_CARDS_REQUEST });
    yield fetchCardsByPageIndex(fetchedPageIndex + 1, totalCount);
  }
}

export function* fetchCardsByPageIndex(pageIndex, totalCount) {
  try {
    const response = yield call(api.get, "/tickets", {
      page: pageIndex,
      perPage: CARD_COUNT_PER_REQUEST, // Request 4 pages of cards at once
      sortDirection: "DESC",
      ticketType: "incident"
    });

    if (totalCount === 0) {
      const total = Number(response.headers["x-total-count"]);
      yield put(updateTotalCount(total));
    }

    const { data } = response;
    const ids = data.map(d => d.coreData.id);
    const entities = data.reduce(
      (acc, cur) => ({ ...acc, [cur.coreData.id]: cur }),
      {}
    );
    yield put(fetchCardsSuccess({ ids, entities }));
    yield put(updateFetchedPageIndex(pageIndex));
  } catch (error) {
    console.error(`Fetching error: ${error.message}`);
    yield put(fetchCardsFailure({ errorMessage: error.message }));
  }
}

export function shouldMakeFetchRequest({
  isFetching = false,
  totalCount = 0,
  cachedCount = 0,
  currentPageIndex = 0
}) {
  if (isFetching) {
    return false;
  } else if (cachedCount === totalCount) {
    if (totalCount === 0) {
      // make initial request
      return true;
    } else {
      // reach the end
      return false;
    }
    // if the cached count is less than 4 pages head, request for more cards
  } else if (
    cachedCount - (currentPageIndex + 1) * CARD_COUNT_PER_PAGE <=
    4 * CARD_COUNT_PER_PAGE
  ) {
    return true;
  } else {
    return false;
  }
}

export default function* watcher() {
  yield all([takeLeading(UPDATE_PAGE_INDEX, fetchCards)]);
}
