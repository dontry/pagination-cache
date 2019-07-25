import Paginator from "../../components/Paginator";
import { connect } from "react-redux";
import { selectPageIndex, selectTotalPageCount } from "./selectors";
import { selectIsLoading } from "../CardGrid/selectors";
import { clickPageIndex } from "./actions";

const mapStateToProps = state => ({
  pageIndex: selectPageIndex(state),
  pageCount: selectTotalPageCount(state),
  isLoading: selectIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onClickPage: pageIndex => dispatch(clickPageIndex(pageIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);
