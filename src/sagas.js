import { all } from "redux-saga/effects";
import paginatorSagas from "./containers/Paginator/sagas";

export default function* rootSaga() {
  yield all([paginatorSagas()]);
}
