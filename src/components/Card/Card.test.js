import React from "react";
import  {render,fireEvent } from "@testing-library/react"
import Card from './Card'

const data = {
 "id": "",
  "number": "INCXXXXX",
  "lastUpdateDate": "YYYY-MM-DD hh:mm:ss",
  "type": "INCIDENT",
  "state": "New",
  "shortDescription": "description",
  "application": "System",
  "assignee": "John Doe",
}

describe('Card Component', () => {
  it("renders Card with data", () => {
    const openCard = jest.fn();
    const {container,  queryByText} = render(<Card data={data} openCard={openCard}/>)
    expect(queryByText(data.number)).toBeTruthy()
    expect(queryByText(data.state)).toBeTruthy();
    expect(queryByText(data.shortDescription)).toBeTruthy();
    expect(queryByText(`Assignee: ${data.assignee}`)).toBeTruthy();
    expect(queryByText(`Application: ${data.application}`)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  })

  it("should fire openCard function when 'Learn more' button is pressed", () => {
    const openCard = jest.fn();
    const {getByText} = render(<Card data={data} openCard={openCard}/>)
    fireEvent.click(getByText("Learn more"))
    expect(openCard).toBeCalled();
  })
})
