import cx from 'classnames'
import css from 'styled-jsx/css'

const getIntentStyles = (intent) => {
  switch (intent) {
    case 'primary':
      return css.resolve`
        .cta-button.primary {
          background-color: black;
          color: white;
          border-color: transparent;
        }

        .cta-button.primary:hover,
        .cta-button.primary:focus-visible {
          background-color: gray;
        }

        .cta-button.primary.inverted {
          background-color: white;
          color: black;
          border-color: transparent;
        }

        .cta-button.primary.inverted:hover,
        .cta-button.primary.inverted:focus-visible {
          background-color: gray;
        }
      `
    case 'secondary':
      return css.resolve`
        .cta-button.secondary {
          background-color: blue;
          color: white;
          border-color: transparent;
        }

        .cta-button.secondary:hover,
        .cta-button.secondary:focus-visible {
          background-color: gray;
        }
      `
    default:
      return css.resolve``
  }
}

export default function StyledJsxButton({ children, intent = 'primary', invert = false }) {
  const { styles: intentStyles, className: intentClassName } = getIntentStyles(intent)
  return (
    <>
      <button
        className={cx('cta-button', intent, intentClassName, {
          inverted: invert,
        })}
      >
        {children}
      </button>

      <style jsx>{`
        .cta-button {
          display: block;
          border-radius: 5px;
          padding: 6px;
          border: 2px solid transparent;
        }
      `}</style>

      {intentStyles}
    </>
  )
}