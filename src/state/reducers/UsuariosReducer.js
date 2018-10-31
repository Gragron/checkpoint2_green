import { FETCH_USERS_SUCCESS, } from './../actions/UsuariosActions';

const initialState = {
    users: []
}

export const UsuariosReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
        
}

export default UsuariosReducer;