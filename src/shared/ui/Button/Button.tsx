import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import {classNames} from "shared/lib/classNames/classNames" ;

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className? : string,
    theme? : ThemeButton,

}
export const Button : FC<ButtonProps> = (props ) => {

    const {className,
        children,
        theme,
        ...OtherProps} = props;

  return (
    <button className = {classNames(cls.Button, {}, [className, cls[theme]])}
    {...OtherProps}>
      {children}
    </button>
  )
};

