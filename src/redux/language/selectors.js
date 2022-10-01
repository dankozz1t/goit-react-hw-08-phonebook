import languageList from 'languages/languageList';

export const getLanguage = state =>
  languageList.find(({ name }) => name === state.language.language).items;

export const getLanguageName = state => state.language.language;
