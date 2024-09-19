import React from 'react';
import s from './Button.module.css';

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <button className={s.btnMain}>{title}</button>
  );
}

export default Button;
