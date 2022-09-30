import React from 'react';

import Form from 'react-bootstrap/Form';

import { getLanguageList, getLanguageName } from 'redux/language/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setLanguage } from 'redux/language/languageSlice';

const Switch = () => {
  const languageName = useSelector(getLanguageName, shallowEqual);
  const languageList = useSelector(getLanguageList, shallowEqual);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setLanguage(value));
  };

  return (
    <Form.Select
      style={{ width: 'auto' }}
      defaultValue={languageName}
      aria-label="Languages select"
      onChange={handleChange}
    >
      {languageList.map(langItem => (
        <option key={langItem} value={langItem}>
          {langItem}
        </option>
      ))}
    </Form.Select>
  );
};

export default Switch;
