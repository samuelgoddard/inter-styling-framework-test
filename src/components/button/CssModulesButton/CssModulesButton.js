import classNames from "classnames";
import styles from "./CssModuleButton.module.css"

export default function CssModulesButton({ children, intent = 'primary', invert = false }) {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primary]: intent == 'primary',
        [styles.secondary]: intent == 'secondary',
        [styles.ghost]: intent == 'ghost',
        [styles.inverted]: invert
      })}
    >
      {children}
    </button>
  )
}