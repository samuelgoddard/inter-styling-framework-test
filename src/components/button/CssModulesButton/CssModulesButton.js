import cx from "classnames";
import styles from "./CssModulesButton.module.css"

export default function CssModulesButton({ children, intent = 'primary', invert = false }) {
  return (
    <button
      className={cx(styles.btn, {
        [styles[intent]]: true,
        [styles.inverted]: invert
      })}
    >
      {children}
    </button>
  )
}