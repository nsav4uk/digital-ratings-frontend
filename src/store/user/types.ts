export const LOGIN = 'LOGIN';
export const INVALID_LOGIN = 'INVALID_LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginInterface {
  username: string;
  password: string;
}

export interface UserInterface {
  userId: number,
  email: string,
  access_token: string,
}

export interface LoginErrorInterface {
  error: string;
}

export interface UserState {
  currentUser: UserInterface;
  error?: LoginErrorInterface;
}

interface LoginUserAction {
  type: typeof LOGIN
  payload: {
    currentUser: UserInterface
  }
}

interface InvalidLoginUserAction {
  type: typeof INVALID_LOGIN
  payload: {
    error: LoginErrorInterface
  }
}

interface LogoutUserAction {
  type: typeof LOGOUT
}

export type UserActionTypes =
  LoginUserAction
  | LogoutUserAction
  | InvalidLoginUserAction;
