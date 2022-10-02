import React from 'react';
import Toggle from 'Animations/Toggle/Toggle';

import classNames from 'classnames';
import languageList from 'languages/languageList';

import { FlagIcon } from 'react-flag-kit';
import { FaTelegram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

import { shallowEqual, useSelector } from 'react-redux';
import { getLanguage } from 'redux/language/selectors';

import s from './ListExamples.module.css';

const ListExamples = () => {
  const lang = useSelector(getLanguage, shallowEqual);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Toggle title={lang.demo_createAccountTitle}>
          <div className={s.createBox}>
            <p className={s.textPosition}>{lang.demo_createAccountText}</p>
            <img
              className={s.imgPosition}
              width="600"
              src={lang.demo_createAccountGif}
              alt={lang.demo_createAccountGifAlt}
            />
            <p className={classNames(s.textPosition, s.textWarning)}>
              <strong>{lang.demo_warningTitle}</strong>
              {lang.demo_createAccountWarning}
            </p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title={lang.demo_crudContactTitle}>
          <div className={s.createBox}>
            <p className={s.textPosition}>{lang.demo_crudContactText}</p>
            <img
              className={s.imgPosition}
              width="600"
              src={lang.demo_crudContactGif}
              alt={lang.demo_crudContactGifAlt}
            />
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title={lang.demo_findContactTitle}>
          <div className={s.createBox}>
            <p className={s.textPosition}>{lang.demo_findContactText}</p>
            <img
              className={s.imgPosition}
              width="600"
              src={lang.demo_findContactGif}
              alt={lang.demo_findContactAlt}
            />
            <p className={classNames(s.textPosition, s.textWarning)}>
              <strong>{lang.demo_warningTitle}</strong>
              {lang.demo_findContactWarning}
            </p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title={lang.demo_switchLanguageTitle}>
          <div className={s.createBox}>
            <p className={s.textPosition}>{lang.demo_switchLanguageText}</p>
            <img
              className={s.imgPosition}
              width="600"
              src={lang.demo_switchLanguageGif}
              alt={lang.demo_switchLanguageGifAlt}
            />
            <p className={s.textPosition}>
              <b>{lang.demo_switchLanguageSecTitle}</b>
            </p>

            <ul className={s.languageList}>
              {languageList.map(({ code, name }) => (
                <li key={code}>
                  <FlagIcon code={code} title={name} size={30} />
                </li>
              ))}
            </ul>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title={lang.demo_enjoyDesignTitle}>
          <div className={s.createBox}>
            <p className={s.textPosition}>{lang.demo_enjoyDesignText}</p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title={lang.demo_thankAuthorTitle}>
          <div className={s.createBox}>
            <p className={s.textPosition}>{lang.demo_thankAuthorText}</p>
            <ul className={classNames(s.listLink, s.textPosition)}>
              <li>
                <a
                  className={s.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/dankozz1"
                >
                  <FaTelegram size={30} title="Telegram" />
                </a>
              </li>
              <li>
                <a
                  className={s.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/dankozz1t"
                >
                  <FaGithub size={30} title="GitHub" />
                </a>
              </li>
              <li>
                <a
                  className={s.link}
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:alexdankoxxl@gmail.com"
                >
                  <FaEnvelope size={30} title="Mail" />
                </a>
              </li>
              <li>
                <a
                  className={s.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/dankozz1/"
                >
                  <FaLinkedin size={30} title="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </Toggle>
      </li>
    </ul>
  );
};

export default ListExamples;
