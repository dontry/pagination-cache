export const CLICK_NEXT_PAGE = "CLICK_NEXT_PAGE";
export const CLICK_PREV_PAGE = "CLICK_PREV_PAGE";
export const CLICK_PAGE_INDEX = "CLICK_PAGE_INDEX";
export const UPDATE_PAGE_INDEX = "UPDATE_PAGE_INDEX";
export const UPDATE_FETCHED_PAGE_INDEX = "UPDATE_FETCHED_PAGE_INDEX";

export const clickPageIndex = pageIndex => ({
  type: UPDATE_PAGE_INDEX,
  payload: {
    pageIndex
  }
});

export const updateFetchedPageIndex = pageIndex => ({
  type: UPDATE_FETCHED_PAGE_INDEX,
  payload: {
    pageIndex
  }
});
