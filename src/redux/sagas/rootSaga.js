import {CREATE_USERS_START, GET_USERS_START, GET_USERS_SUCCESS} from "../reducers/actionType";
import {takeEvery} from 'redux-saga/effects'
import {getUsersHandler} from "./handlers/getUsers";
import {createUsersHandler} from "./handlers/createUser";
export function* watcherSaga(){

    yield takeEvery(GET_USERS_START, getUsersHandler)
    yield takeEvery(CREATE_USERS_START, createUsersHandler)
}