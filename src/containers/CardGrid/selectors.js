import { createSelector } from "reselect";
import { selectPageIndex } from "../Pagination/selectors";
import { CARD_COUNT_PER_PAGE } from "../../utils/constants";

export const selectCards = state =>
  state.cards.ids.map(id => state.cards.entities[id]);

export const selectCachedCount = state => state.cards.ids.length;

export const selectCardsByPageIndex = createSelector(
  selectCards,
  selectPageIndex,
  (cards, pageIndex) => {
    return cards.slice(
      pageIndex * CARD_COUNT_PER_PAGE,
      (pageIndex + 1) * CARD_COUNT_PER_PAGE
    );
  }
);

export const selectActiveCard = createSelector(
  state => state.cards.activeCardId,
  state => state.cards.entities,
  (activeId, cards) => cards[activeId]
);

export const selectTotalCount = state => state.cards.totalCount;

export const selectIsFetching = state => state.cards.isFetching;

//  loading status is true when the client is fetching and it reaches the latest page
export const selectIsLoading = createSelector(
  selectCachedCount,
  selectPageIndex,
  selectIsFetching,
  (cachedCount, pageIndex, isFetching) => {
    const hasReachedLatestPage =
      cachedCount <= (pageIndex + 1) * CARD_COUNT_PER_PAGE;
    return isFetching && hasReachedLatestPage;
  }
);

export const selectErrorMessage = state => state.cards.errorMessage;
