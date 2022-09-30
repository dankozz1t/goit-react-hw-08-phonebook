import languageList from 'languages/languageList';

export const getLanguage = state => languageList[state.language.language];
export const getLanguageName = state => state.language.language;

export const getLanguageList = state => state.language.languageList;
