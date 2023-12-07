import {put,call} from 'redux-saga/effects'

import createUser from "../requests/createUser";
import {createUsersFailure, createUsersSuccess} from "../../actions/createUsers";
export function* createUsersHandler(action){
    try {
        const response = yield call(createUser,action.payload)
        yield put(createUsersSuccess(response.data))
    }catch (e){
        yield put(createUsersFailure(e.message))
    }
}