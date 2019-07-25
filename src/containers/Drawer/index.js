import Drawer from "../../components/Drawer";
import { selectActiveCard } from "../CardGrid/selectors";
import { connect } from "react-redux";
import { TOGGLE_DRAWER } from "./actions";
import _ from "lodash";

const mapStateToProps = state => {
  const activeCard = selectActiveCard(state) || {};
  return {
    data: activeCard.serviceData || {},
    number: _.get(activeCard, "coreData.number", "xx"),
    isOpen: state.ui.isDrawerOpen
  };
};

const mapDispatchToProps = dispatch => ({
  toggle: isOpen => dispatch({ type: TOGGLE_DRAWER, payload: { isOpen } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
