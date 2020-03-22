import { AppState, AppActionTypes, CHANGE_LANGUAGE } from './types';

export const LANGUAGES = ["uk", "en"];

let index;

if (localStorage.getItem('locale')) {
  index = LANGUAGES.indexOf(localStorage.getItem('locale') || '');
} else {
  index = LANGUAGES.indexOf(navigator.language.split(/[-_]/)[0]);
}

const initialState: AppState = {
  language: {
    language: LANGUAGES[index > -1 ? index : 0]
  },
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      localStorage.setItem("locale", action.payload.language);
      return {
        ...state,
        language: action.payload
      }
    }
    default:
      return state
  }
}
