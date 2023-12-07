import {
    CREATE_USERS_FAILURE,
    CREATE_USERS_START,
    CREATE_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USERS_START,
    GET_USERS_SUCCESS
} from "./actionType";

const initialState = {
    data:[],
    isLoading:false,
    error:null

}
const UsersReducer  = (state = initialState,action)=>{
    switch (action.type){
        case GET_USERS_START: {
            return { ...state, isLoading: true };
        }
        case GET_USERS_SUCCESS: {
            return { ...state, isLoading: false, data: action.payload };
        }
        case GET_USERS_FAILURE: {
            return { ...state, isLoading: false, error: action.payload };
        }
        case CREATE_USERS_START: {
            return { ...state, isLoading: true };
        }
        case CREATE_USERS_SUCCESS: {
            const newUser = [...state.data, action.payload]
            return { ...state, isLoading: false, data: newUser };
        }
        case CREATE_USERS_FAILURE: {
            return { ...state, isLoading: false, error: action.payload };
        }
        default :{
            return state

        }
    }
}

export default  UsersReducer;