import axios from 'axios';

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

export const INSERT_NEW_USER = 'INSERT_NEW_USER';

export const DELETE_USERS = 'DELETE_USERS';

export const PUT_USER = "PUT_USER";

const FetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://g4-ch2.herokuapp.com/api/usuarios/green");    
            // console.log(response);
            dispatch(SuccessFetchingUsers(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}
export const InsertNewUser = user => async dispatch => {
    console.log(user);
    const respuesta = await axios.post(`https://g4-ch2.herokuapp.com/api/usuarios/green/`, user);
    dispatch({
         type: INSERT_NEW_USER,
         payload: respuesta.data
        }
    )
}

export const DeleteUsers = id => async dispatch => {
    await axios.delete(`https://g4-ch2.herokuapp.com/api/usuarios/green/${id}`);

    dispatch({
         type: DELETE_USERS,
         payload: id
    })
}

const PutUsers = (user,_id) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`https://g4-ch2.herokuapp.com/api/usuarios/green/${_id}`,user);
            // console.log(response);
            dispatch(FetchUsers());
        } catch (error) {
            console.log(error);
        }
    }
}


const SuccessFetchingUsers = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users
})



export { FetchUsers as fetchUsers, PutUsers as putUsers, InsertNewUser as insertNewUser, DeleteUsers as deleteUsers};