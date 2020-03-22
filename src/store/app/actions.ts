import { Language, CHANGE_LANGUAGE, AppActionTypes } from './types';

export function changeLanguage(newLanguage: Language): AppActionTypes {
  return {
    type: CHANGE_LANGUAGE,
    payload: newLanguage
  }
}
