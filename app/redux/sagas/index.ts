import { all, takeEvery } from "redux-saga/effects";
import * as Types from '../actionTypes';
import cardDetails from './cardDetails'

export default function* rootSaga() {
    yield all([
        takeEvery(Types.fetchCardDetails, cardDetails),
    ]);
};