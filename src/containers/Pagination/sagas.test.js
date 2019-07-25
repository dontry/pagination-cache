import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import { fetchCardsSuccess, updateTotalCount } from "./actions";
import { shouldMakeFetchRequest, fetchCardsByPageIndex } from "./sagas";
import { CARD_COUNT_PER_REQUEST } from "../../utils/constants";
import api from "../../utils/api";

jest.mock("../../utils/api");

describe("Paginator sagas", () => {
  describe("Test shouldMakeFetchRequest function", () => {
    it("should return false when isFetching is true", () => {
      expect(shouldMakeFetchRequest({ isFetching: true })).toBe(false);
    });

    it("should return false when having fetched all data", () => {
      expect(
        shouldMakeFetchRequest({
          isFetching: false,
          totalCount: 10,
          cachedCount: 10
        })
      ).toBe(false);
    });

    // make initial request
    it("should return true when totalCount = 0, cachedCount = 0, isFetching = false", () => {
      expect(
        shouldMakeFetchRequest({
          isFetching: false,
          totalCount: 0,
          cachedCount: 0
        })
      );
    });

    it("should return true when cached count is less then 4 pages ahead of currentPageIndex", () => {
      expect(
        shouldMakeFetchRequest({
          isFetching: false,
          totalCount: 1000,
          cachedCount: 40,
          currentPageIndex: 5
        })
      );
    });
  });

  it("should handle fetchCards generator", () => {
    const gen = cloneableGenerator(fetchCardsByPageIndex)(0, 0);
    api.get.mockImplementation(() => {
      return Promise.resolve({
        headers: {
          "x-total-count": 100
        },
        data: [
          {
            coreData: {
              id: 1
            }
          },
          {
            coreData: {
              id: 2
            }
          }
        ]
      });
    });

    expect(gen.next().value).toEqual(
      call(api.get, "/tickets", {
        page: 0,
        perPage: CARD_COUNT_PER_REQUEST, // Request 4 pages of cards at once
        sortDirection: "DESC",
        ticketType: "incident"
      })
    );
    expect(gen.next().value).toEqual(put(updateTotalCount(100)));
    expect(api.get).toHaveBeenCalledTimes(1);
    expect(gen.next().value).toEqual(
      put(
        fetchCardsSuccess({
          ids: [1, 2],
          entities: {
            1: { coreData: { id: 1 } },
            2: { coreData: { id: 2 } }
          }
        })
      )
    );
  });
});
