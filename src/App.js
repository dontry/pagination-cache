import React, { Component } from "react";
import "./App.css";
import CardGrid from "./containers/CardGrid";
import { fetchCards } from "./containers/CardGrid/actions";
import Paginator from "./containers/Paginator";
import Drawer from "./containers/Drawer";
import { NUMBER_CARDS_PER_REQUEST } from "./utils/constants";
import LoadingIndicator from "./components/LoadingIndicator";
import { selectIsFetching } from "./containers/CardGrid/selectors";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { requestCards } = this.props;
    requestCards(0, NUMBER_CARDS_PER_REQUEST);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <div className="cardContainer">
          {isLoading ? <LoadingIndicator /> : <CardGrid />}
        </div>
        <Paginator />
        <Drawer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: selectIsFetching(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestCards: (pageIndex, perPage) =>
    dispatch(fetchCards({ pageIndex, perPage }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
