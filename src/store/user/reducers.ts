import {
  INVALID_LOGIN,
  LOGIN,
  LOGOUT,
  UserActionTypes,
  UserInterface,
  UserState
} from "./types";

const initialState: UserState = {
  currentUser: {} as UserInterface,
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('access_token', action.payload.currentUser.access_token);
      return { ...state, ...action.payload };

    case INVALID_LOGIN:
      return { ...state, ...action.payload };

    case LOGOUT:
      localStorage.removeItem('access_token');
      return { ...state, ...initialState };

    default:
      return state;
  }
}
