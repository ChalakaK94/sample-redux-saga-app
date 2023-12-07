import {GET_USERS_FAILURE, GET_USERS_START, GET_USERS_SUCCESS} from "./actionType";

const initialState = {
    data:[],
    isLoading:false,
    error:null

}
const UsersReducer  = (state = initialState,action)=>{
    switch (action.type){
        case GET_USERS_START:{
            return {...state, isLoading: true}
        }
        case  GET_USERS_SUCCESS: {
            return {...state, data: action.payload, isLoading: false}
        }
        case GET_USERS_FAILURE: {
            return {...state, isLoading: false, error: action.payload}
        }
        default :{
            return state

        }
    }
}

export default  UsersReducer;