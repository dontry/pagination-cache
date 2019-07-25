import { CARD_COUNT_PER_PAGE } from "../../utils/constants";
export const selectPageIndex = state => state.pagination.pageIndex;
export const selectFetchedPageIndex = state =>
  state.pagination.fetchedPageIndex;
export const selectTotalPageCount = state =>
  Math.ceil(state.cards.totalCount / CARD_COUNT_PER_PAGE);
