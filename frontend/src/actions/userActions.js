import Axios from 'axios';
import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_CLEAR_ERROR,
} from '../constants/userConstants';

export const register = (nome, email, senha) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, senha } });
    try {
        const { data } = await Axios.post('/api/users/register', {
            nome,
            email,
            senha,
        });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const signin = (email, senha) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, senha } });
    try {
        const { data } = await Axios.post('/api/users/signin', { email, senha });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_SIGNOUT });
};
export const clearError = () => (dispatch) => {
    dispatch({ type: USER_CLEAR_ERROR });
};