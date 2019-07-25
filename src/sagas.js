import { all } from "redux-saga/effects";
import paginatorSagas from "./containers/Pagination/sagas";

export default function* rootSaga() {
  yield all([paginatorSagas()]);
}
