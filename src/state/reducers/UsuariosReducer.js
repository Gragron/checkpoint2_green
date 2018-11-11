import { FETCH_USERS_SUCCESS, INSERT_NEW_USER} from './../actions/UsuariosActions';

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
        case INSERT_NEW_USER:
            return {
                ...state,
                productos: [...state.users, action.payload]
            }
        default:
            return state;
    }
        
}

export default UsuariosReducer;