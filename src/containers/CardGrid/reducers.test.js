import reducer, {
  initialState,
  ids,
  entities,
  totalCount,
  isFetching
} from "./reducers";
import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_REQUEST,
  UPDATE_TOTAL_COUNT
} from "./actions";

const fetchCardSuccessAction = {
  type: FETCH_CARDS_SUCCESS,
  payload: {
    ids: [1, 2, 3, 4],
    entities: {
      1: { coreData: {} },
      2: { coreData: {} },
      3: { coreData: {} },
      4: { coreData: {} }
    }
  }
};

describe("Cards reducer", () => {
  it("should return initialSate", () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  });
});

describe("ids", () => {
  it("should add new ids when fetching cards succeeds", () => {
    expect(ids([], fetchCardSuccessAction)).toStrictEqual(
      fetchCardSuccessAction.payload.ids
    );
  });

  it("should return previous ids when fetching cards fails", () => {
    expect(ids([], { type: FETCH_CARDS_FAILURE })).toStrictEqual([]);
  });
});

describe("entities", () => {
  it("should add new cards when fetching cards succeeds", () => {
    expect(entities([], fetchCardSuccessAction)).toStrictEqual(
      fetchCardSuccessAction.payload.entities
    );
  });
});

describe("isFetching", () => {
  it("should return true when dispatching a new request", () => {
    expect(isFetching(false, { type: FETCH_CARDS_REQUEST })).toBe(true);
  });

  it("should return true when fetching cards fails", () => {
    expect(isFetching(false, { type: FETCH_CARDS_FAILURE })).toBe(false);
  });

  it("should return true when fetching cards succeeds", () => {
    expect(isFetching(false, { type: FETCH_CARDS_SUCCESS })).toBe(false);
  });
});

describe("totalCount", () => {
  it("should update when receive a new total number", () => {
    expect(
      totalCount(0, { type: UPDATE_TOTAL_COUNT, payload: { total: 10 } })
    ).toBe(10);
  });

  it("should return 0 when receive a negative number", () => {
    expect(
      totalCount(0, { type: UPDATE_TOTAL_COUNT, payload: { total: -10 } })
    ).toBe(0);
  });
});
