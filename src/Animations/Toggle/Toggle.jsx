import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { CSSTransition } from 'react-transition-group';

import s from './Toggle.module.css';

const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={s.btn} onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? (
          <IoMdArrowDropup size={30} />
        ) : (
          <IoMdArrowDropdown size={30} />
        )}
        <h3 className={s.title}>{title}</h3>
      </button>

      <CSSTransition in={isOpen} unmountOnExit className={s.text} timeout={300}>
        {children}
      </CSSTransition>
    </>
  );
};

export default Toggle;
