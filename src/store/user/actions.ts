import { push } from 'react-router-redux';
import {
  INVALID_LOGIN,
  LOGIN,
  LoginInterface,
  LOGOUT,
  UserState,
} from './types';

export function loginUser(data: LoginInterface) {
  return (dispatch: any) => {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}auth/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: data.username, ...data}),
      mode: "cors"
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(loginUserSuccess(res));
        dispatch(push('/'));
      })
      .catch(err => {
        dispatch(loginUserFailure(err.message));
      });
  };
}

const loginUserSuccess = (user: UserState) => ({
  type: LOGIN,
  payload: {
    currentUser: user
  }
});

const loginUserFailure = (error: string) => ({
  type: INVALID_LOGIN,
  payload: {
    error: {
      error
    }
  }
});

export const logoutUser = () => ({
  type: LOGOUT,
});
