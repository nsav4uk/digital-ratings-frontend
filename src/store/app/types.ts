export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export interface Language {
  language: string;
}

export interface AppState {
  language: Language;
}

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE
  payload: Language
}

export type AppActionTypes = ChangeLanguageAction;
