import cx from "classnames";
import styles from "./CssModulesDisplayText.module.css"

export default function CssModulesDisplayText({ children, size = 'base' }) {
  return (
    <span className={cx(styles.displayText, { [styles[size]]: true })}>
      {children}
    </span>
  )
}