import styles from "./button.module.scss";
import classNames from "classnames";

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

export default Button;
