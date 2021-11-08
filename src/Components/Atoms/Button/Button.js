import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--secondary"];

const SIZES = [
  "btn--medium",
  "btn--small",
  "btn--xs",
  "btn--large",
  "btn--mobile",
  "btn--wide",
];

const COLOR = ["primary", "secondary", "red", "green", "yellow"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  style,
  addClass,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} ${addClass}`}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
