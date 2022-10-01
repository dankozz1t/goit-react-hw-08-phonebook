import React from 'react';

import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import { getLanguageName } from 'redux/language/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setLanguage } from 'redux/language/languageSlice';
import { FlagIcon } from 'react-flag-kit';

import capitalizeFirstLetter from 'helpers/capitalizeFirstLetter';
import languageList from 'languages/languageList';

import s from './Switch.module.css';

const Switch = () => {
  const languageName = useSelector(getLanguageName, shallowEqual);

  const dispatch = useDispatch();

  const handleLangOnSelect = name => {
    dispatch(setLanguage(name));
  };

  return (
    <Form aria-label="Languages select">
      <Dropdown onSelect={handleLangOnSelect}>
        <Dropdown.Toggle className={s.dropdownToggle}>
          <FlagIcon
            code={languageList.find(item => item.name === languageName).code}
            size={30}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className={s.dropdownMenu}>
          {languageList.map(({ name, code }) => (
            <Dropdown.Item
              key={code}
              eventKey={name}
              className={s.dropdownItem}
            >
              <FlagIcon code={code} size={30} />
              {capitalizeFirstLetter(name)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};

export default Switch;
