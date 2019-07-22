import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import Paginator from "./Paginator";

describe('Paginator Component', () => {
   it("should show 'Page 0 of 10'", () => {
    const clickPrev=jest.fn();
    const clickNext=jest.fn();
    const { queryByTestId} = render(<Paginator pageIndex={0} pageCount={10}  clickPrev={clickPrev} clickNext={clickNext}/>)

    expect(queryByTestId("pagination-info").innerHTML).toBe("Page 0 of 10");
  })

  it("should fire clickPrev function when 'Prev' is clicked", () => {
    const clickPrev=jest.fn();
    const clickNext=jest.fn();
    const { getByText} = render(<Paginator pageIndex={0} pageCount={10}  clickPrev={clickPrev} clickNext={clickNext}/>)

    fireEvent.click(getByText("Prev"));
    expect(clickPrev).toBeCalled();
  })
})
