import React from "react";
import { render } from "react-testing-library";
import { Provider } from "react-redux";
import configureStore from "../stores/configureStore";

function renderWithReduxStore(reducers) {
  return function(initialState) {
    const store = configureStore(initialState);
    return render(<Provider store={store}></Provider>);
  };
}

export { renderWithReduxStore };
