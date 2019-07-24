import Paginator from "../../components/Paginator";
import { connect } from "react-redux";
import { selectPageIndex, selectPageCount } from "./selectors";
import { clickPageIndex } from "./actions";

const mapStateToProps = state => ({
  pageIndex: selectPageIndex(state),
  pageCount: selectPageCount(state)
});

const mapDispatchToProps = dispatch => ({
  selectPageIndex: pageIndex => dispatch(clickPageIndex(pageIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);
