import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Paginator from "./Paginator";

describe("Paginator Component", () => {
  it("should show 'Page 0 of 10'", () => {
    const clickPage = jest.fn();

    const { queryByTestId } = render(
      <Paginator pageIndex={0} pageCount={10} onClickPage={clickPage} />
    );

    expect(queryByTestId("pagination-info").innerHTML).toBe("Page 0 of 10");
  });

  it("should call clickPage function when 'Prev' is clicked", () => {
    const clickPage = jest.fn();
    const { getByText } = render(
      <Paginator pageIndex={0} pageCount={10} onClickPage={clickPage} />
    );

    fireEvent.click(getByText("Prev"));
    expect(clickPage).toHaveBeenCalled();
  });

  it("doesn't call clickPage function when it is loading", () => {
    const clickPage = jest.fn();
    const { getByText } = render(
      <Paginator
        pageIndex={0}
        pageCount={10}
        onClickPage={clickPage}
        isLoading={true}
      />
    );

    fireEvent.click(getByText("Next"));
    expect(clickPage).toHaveBeenCalledTimes(0);
  });
});
