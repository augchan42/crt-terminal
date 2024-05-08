import React, { memo } from 'react';
import { RenderList } from '../../../../hooks/terminal/useCommandLine';
import Character from '../../../Character/Character';

interface InputStringProps {
  cursorPosition: number;
  renderValue: RenderList;
  hasFocus?: boolean;
  locked: boolean;
}

const InputString = memo(({ 
  cursorPosition, 
  renderValue, 
  hasFocus,
  locked,
 }: InputStringProps) => (
  <>
    {renderValue.map((character, key) => (
      <Character selected={cursorPosition === key} key={key} hasFocus={hasFocus} locked={locked}>
        {character}
      </Character>
    ))}
  </>
));

export default InputString;
