import axios from 'axios';

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

const FetchUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://g4-ch2.herokuapp.com/api/usuarios/green");
            console.log(response);
            dispatch(SuccessFetchingUsers(response.data.data));
        } catch (error) {
            console.log(error);
        }
    }
}

const SuccessFetchingUsers = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users
})


export { FetchUsers as fetchUsers };