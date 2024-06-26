import styles from "./button.module.scss";

const Button = ({ className, rounded, ...props }) => {
  return (
    <button
      className={`${styles.button} ${rounded && styles.rounded} ${className}`}
      {...props}
    />
  );
};

export default Button;
