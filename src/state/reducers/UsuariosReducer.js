import { FETCH_USERS_SUCCESS, INSERT_NEW_USER, DELETE_USERS, GET_USER } from './../actions/UsuariosActions';

const initialState = {
    users: []
}

export const UsuariosReducer = (state = initialState, action) => {
    console.log('action',action)
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
        case GET_USER:
            return {
                ...state,
                users: action.users,
                type: action.type
            }
        default:
            return state;
    }
}

export default UsuariosReducer;