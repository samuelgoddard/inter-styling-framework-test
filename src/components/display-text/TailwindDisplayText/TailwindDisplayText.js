import cx from "classnames";

export default function TailwindDisplayText({ children, size = 'base' }) {
  return (
    <span className={cx('font-bold tracking-[-0.05em] leading-[0.9]', {
      'text-[clamp(32px,3.5vw,38px)] lg:text-[clamp(34px,3vw,51px)]': size == 'base',
      'text-[clamp(42px,4.8vw,52px)] lg:text-[clamp(52px,4.8vw,96px)]': size == 'md',
      'text-[clamp(53px,8vw,82px)] lg:text-[clamp(84px,8vw,115px)]': size == 'lg',
      'text-[clamp(58px,10.5vw,85px)] md:text-[clamp(80px,10vw,120px)] lg:text-[clamp(120px,10.8vw,180px)]': size == 'xl'
     })
    }>
      {children}
    </span>
  )
}