import React, { PropsWithChildren } from 'react';
import classes from './character.module.scss';

interface CharacterProps {
  selected?: boolean;
  className?: string;
  hasFocus?: boolean;
}

const Character = function Character({
  children,
  selected = false,
  className = '',
  hasFocus = true,
}: PropsWithChildren<CharacterProps>) {
  const selectedStyle = selected ? classes.characterSelected : '';
  const focusStyle = (selected === true && hasFocus === false) ? classes.characterSelectedNotFocused : ''

  return (
    <span className={[classes.character, selectedStyle, focusStyle, className, 'crt-character'].join(' ')}>
      {children}
    </span>
  );
};

export default Character;
