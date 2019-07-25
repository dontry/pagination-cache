import { selectIsLoading } from "./selectors";
import { initialState as cards } from "./reducers";
import { initialState as pagination } from "../Pagination/reducers";

describe("isLoading selector", () => {
  it("should return false when it's not fetching data", () => {
    const state = {
      pagination,
      cards: {
        ...cards,
        isFetching: false
      }
    };
    expect(selectIsLoading(state)).toBe(false);
  });

  it("should return false when it hasn't reached latest cached page and it's fetching data", () => {
    const mockCards = new Array(80).fill(0).reduce((acc, cur, index) => {
      return { ...acc, [index]: { coreData: { id: index } } };
    }, {});
    const state = {
      pagination: {
        ...pagination,
        pageIndex: 1
      },
      cards: {
        ids: Object.keys(mockCards),
        entities: mockCards,
        isFetching: true
      }
    };
    expect(selectIsLoading(state)).toBe(false);
  });

  it("should return true when it reaches latest cached page and it's fetching data", () => {
    const mockCards = new Array(80).fill(0).reduce((acc, cur, index) => {
      return { ...acc, [index]: { coreData: { id: index } } };
    }, {});
    const state = {
      pagination: {
        ...pagination,
        pageIndex: 30
      },
      cards: {
        ids: Object.keys(mockCards),
        entities: mockCards,
        isFetching: true
      }
    };
    expect(selectIsLoading(state)).toBe(true);
  });
});
