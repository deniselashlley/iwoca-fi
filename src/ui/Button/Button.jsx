import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className, label, onClick, isDisabled }) => {
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  onClick: () => undefined,
  isDisabled: false,
};

export default Button;
