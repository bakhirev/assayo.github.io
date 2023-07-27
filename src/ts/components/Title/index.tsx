import React from 'react';

import style from './index.module.scss';

interface ITitleProps {
  text: string;
  className?: string;
}

function Title({ text, className }: ITitleProps) {
  if (!text) return null;

  return (
    <h2 className={`${style.title} ${className || ''}`}>
      {text}
    </h2>
  );
}

Title.defaultProps = {
  className: '',
};

export default Title;
