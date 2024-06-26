import styles from "./button.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ className, rounded, ...props }) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        className
      )}
      {...props}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;
