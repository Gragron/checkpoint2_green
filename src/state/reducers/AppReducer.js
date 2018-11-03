import { combineReducers } from 'redux';

// reducers
import { UsuariosReducer } from './UsuariosReducer';

export const AppReducer = combineReducers({
    users: UsuariosReducer
});