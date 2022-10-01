import React from 'react';
import Toggle from 'Animations/Toggle/Toggle';

import s from './ListExamples.module.css';
import classNames from 'classnames';
import languageList from 'languages/languageList';
import { FlagIcon } from 'react-flag-kit';
import { FaTelegram } from 'react-icons/fa';

const ListExamples = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Toggle title="Створити власний аккаунт">
          <div className={s.createBox}>
            <p className={s.textPosition}>
              Ви можете створити свій персональний обліковий запис! Він буде
              зберігатись на базі даних та буде доступний з любого пристрою.
            </p>

            <img
              className={s.imgPosition}
              width="600"
              src="https://i.ibb.co/HgDksjM/2022-10-01-19-50-32.gif"
              alt="demonstration create account"
            />
            <p className={classNames(s.textPosition, s.textWarning)}>
              <strong>Увага!</strong> Це навчальний проєкт, база даних очищує
              протягом місяці. Також будь ласка не використовуйте ваші реальні
              паролі, бо ну його на...
            </p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title="Додавати та видаляти контакти">
          <div className={s.createBox}>
            <p className={s.textPosition}>
              Ви можете додавати та видаляти контакти з вашої телефонної книги!
            </p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title="Шукати контактів по імені">
          <div className={s.createBox}>
            <p className={s.textPosition}>
              Задовбались скролити вниз по 10 хвилин, щоб знайти
              <b> Тараса Шевченко?</b> Тепер ви можете шукати контактів по
              імені! І це займе всего навсяго 3,1415926 мілісекунди!
            </p>
            <p className={classNames(s.textPosition, s.textWarning)}>
              <strong>Увага!</strong> Збережений час ви можете витратити на те,
              щоб написати автору який він класний
            </p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title="Перемикати мову">
          <div className={s.createBox}>
            <p className={s.textPosition}>
              Все ще не знаєте англійської? Як шкода..... Але саме для Тебе ми
              зробили перемикач мов!
            </p>
            <p className={s.textPosition}>
              <b>Наразі доступні мови:</b>
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
        <Toggle title="Насолоджуватись дизайном">
          <div className={s.createBox}>
            <p className={s.textPosition}>
              Ой як переливається фон... Ой як красиво тикаються кнопочки... Ой,
              а який крутий спінер
            </p>
          </div>
        </Toggle>
      </li>
      <li className={s.item}>
        <Toggle title="Подякувати автора">
          <div className={s.createBox}>
            <p className={s.textPosition}>
              Ну якщо ти вже так впевнено сюди тикнув, треба в листівочку мені
              написати
            </p>

            <a
              className={classNames(s.link, s.textPosition)}
              href="https://t.me/dankozz1"
            >
              <FaTelegram size={30} title="telegram" />
            </a>
          </div>
        </Toggle>
      </li>
    </ul>
  );
};

export default ListExamples;
