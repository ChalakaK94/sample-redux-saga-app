import {CREATE_USERS_FAILURE, CREATE_USERS_START, CREATE_USERS_SUCCESS} from "../reducers/actionType";

export  const createUsers = (payload) => ({type:CREATE_USERS_START,payload})
export  const createUsersSuccess= payload => ({type:CREATE_USERS_SUCCESS, payload})
export  const createUsersFailure = payload => ({type:CREATE_USERS_FAILURE,payload})