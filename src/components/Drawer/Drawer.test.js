import React from "react";
import { render } from "@testing-library/react";
import Drawer, {DrawerContent} from "./Drawer";

const number = "INCXXXX";

const serviceData = {
 caller_id: "",
    resolved_at: "",
    approval_set: "",
    subcategory: "",
}

describe("Drawer Component", () => {
  it("renders Drawer with service data", () => {
    const close = jest.fn();
    const {container} = render(<Drawer isOpen={true} close={close} number={number} data={serviceData}/>)
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe("DrawerContent Component", () => {
  it("renders Drawer with service data", () => {
    const {container, queryByText} = render(<DrawerContent isOpen={true}  number={number} data={serviceData}/>)
    expect(queryByText(number)).toBeTruthy();
    Object.keys(serviceData).map(key => {
      expect(queryByText(key)).toBeTruthy();
    })
    expect(container.firstChild).toMatchSnapshot();
})
})
