import { FETCH_USERS_SUCCESS, INSERT_NEW_USER, DELETE_USERS } from './../actions/UsuariosActions';

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
                users: [...state.users, action.payload]
            }
        case DELETE_USERS:
            return {
                ...state,
                users: state.users.filter(users => users._id !== action.payload )
                
            }
        default:
            return state;
    }
        
}

export default UsuariosReducer;