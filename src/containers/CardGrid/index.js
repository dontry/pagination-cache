import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { selectCardsByPageIndex } from "./selectors";
import { openCard } from "./actions";
import { CoreDataType } from "../../components/Card/Card";
import "./style.css";

export class CardGrid extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape(CoreDataType)),
    openCard: PropTypes.func
  };

  render() {
    const { cards, openCard } = this.props;
    return (
      <div className="cardGrid-container">
        {cards.map(card => (
          <Card
            key={card.coreData.id}
            id={card.coreData.id}
            data={card.coreData}
            openCard={openCard}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: selectCardsByPageIndex(state)
  };
};

const mapDispatchToProps = dispatch => ({
  openCard: id => dispatch(openCard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardGrid);
