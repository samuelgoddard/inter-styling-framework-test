import cx from "classnames";
import { defaultCss, baseCss, lgCss, mdCss, xlCss } from './styles'

const sizeCssMap = {
  base: baseCss,
  md: mdCss,
  lg: lgCss,
  xl: xlCss,
}

export default function StyledJsxDisplayText({ size = 'base', children }) {
  const { styles: defaultStyles, className: defaultClassname } = defaultCss
  const { styles: sizeStyles, className: sizeClassName } = sizeCssMap[size]

  return (
    <>
      <span className={cx('text-display', defaultClassname, sizeClassName)}>
        {children}
      </span>
      {defaultStyles}
      {sizeStyles}
    </>
  )
}