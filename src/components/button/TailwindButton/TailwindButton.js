import cx from "classnames";

export default function TailwindButton({ children, intent = 'primary', invert = false }) {
  return (
    <button
      className={cx('block rounded-[5px] p-[6px] border-transparent border-2 hover:bg-[grey] focus:bg-[grey]', {
        'bg-white text-black': (intent == 'primary' && invert),
        'bg-black text-white': (intent == 'primary' && !invert),
        'bg-[blue] text-white': intent == 'secondary',
      })}
    >
      {children}
    </button>
  )
}