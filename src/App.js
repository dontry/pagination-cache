import React, { Component } from "react";
import "./App.css";
import CardGrid from "./containers/CardGrid";
import { clickPageIndex } from "./containers/Pagination/actions";
import Pagination from "./containers/Pagination";
import Drawer from "./containers/Drawer";
import LoadingIndicator from "./components/LoadingIndicator";
import { selectIsLoading } from "./containers/CardGrid/selectors";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { initialize } = this.props;
    initialize(0);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <div className="cardContainer">
          {isLoading ? <LoadingIndicator /> : <CardGrid />}
        </div>
        <Pagination />
        <Drawer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: selectIsLoading(state)
  };
};

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(clickPageIndex(0))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
