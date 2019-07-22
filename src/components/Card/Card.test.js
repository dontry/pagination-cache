import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

const coreData = {
  id: "",
  number: "INCXXXXX",
  lastUpdateDate: "YYYY-MM-DD hh:mm:ss",
  type: "INCIDENT",
  state: "New",
  shortDescription: "description",
  application: "System",
  assignee: "John Doe"
};

describe("Card Component", () => {
  it("renders Card with core data", () => {
    const openCard = jest.fn();
    const { container, queryByText } = render(
      <Card data={coreData} openCard={openCard} />
    );
    expect(queryByText(coreData.number)).toBeTruthy();
    expect(queryByText(coreData.state)).toBeTruthy();
    expect(queryByText(coreData.shortDescription)).toBeTruthy();
    expect(queryByText(`Assignee: ${coreData.assignee}`)).toBeTruthy();
    expect(queryByText(`Application: ${coreData.application}`)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should fire openCard function when 'Learn more' button is pressed", () => {
    const openCard = jest.fn();
    const { getByText } = render(<Card data={coreData} openCard={openCard} />);
    fireEvent.click(getByText("Learn more"));
    expect(openCard).toBeCalled();
  });
});
