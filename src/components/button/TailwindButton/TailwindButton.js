import cx from "classnames";

export default function TailwindButton({ children, intent = 'primary', invert = false }) {
  return (
    <button
      className={cx('tracking-tight block rounded-[5px] py-[6px] px-[12px] font-bold border-transparent border-2 hover:bg-black/60 focus:bg-black/60', {
        'bg-white text-black': (intent == 'primary' && invert),
        'bg-black text-white': (intent == 'primary' && !invert),
        'bg-[#FF5600] text-white': intent == 'secondary',
      })}
    >
      {children}
    </button>
  )
}