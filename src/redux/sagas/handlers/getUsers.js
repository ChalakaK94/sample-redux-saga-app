import {put,call} from 'redux-saga/effects'
import {getUsersFailure, getUsersSuccess} from "../../actions/getUsers";

import getUsersRequest from "../requests/getUsers";
export function* getUsersHandler(){
    try {
    const response = yield call(getUsersRequest)
        yield put(getUsersSuccess(response.data))
    }catch (e){
        yield put(getUsersFailure(e.message))
    }
}