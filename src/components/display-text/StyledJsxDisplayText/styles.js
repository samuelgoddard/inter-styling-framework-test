import css from 'styled-jsx/css'

export const defaultCss = css.resolve`
  .text-display {
    --preferred-scale: calc((100 * (var(--max) - var(--min))) / (var(--bp-max) - var(--bp-min)));
    --preferred-base: calc(
      ((var(--bp-min) * var(--max)) - (var(--bp-max) * var(--min))) /
        (var(--bp-min) - var(--bp-max))
    );
    font-size: clamp(
      calc(var(--min) * 1px),
      calc((var(--preferred-scale) * 1vw) + (var(--preferred-base) * 1px)),
      calc(var(--max) * 1px)
    );
    font-weight: 700;
    letter-spacing: var(--ls);
    line-height: calc(var(--lh) * 1em);
  }
`

export const baseCss = css.resolve`
  .text-display {
    --min: 32;
    --max: 38;
    --bp-min: 414;
    --bp-max: 1023; 
    --lh: 0.95;
    --ls: -0.05em;
  }

  @media (min-width: 1024px) {
    .text-display {
      --min: 38;
      --max: 51;
      --bp-min: 1024;
      --bp-max: 1600;
    }
  }
`

export const mdCss = css.resolve`
  .text-display {
    --min: 42;
    --max: 52;
    --bp-min: 414;
    --bp-max: 1023;
    --lh: 1;
    --ls: -0.05em;
  }

  @media (min-width: 1024px) {
    .text-display {
      --min: 52;
      --max: 96;
      --bp-min: 1024;
      --bp-max: 1600;
      --lh: 0.9;
    }
  }
`

export const lgCss = css.resolve`
  .text-display {
    --min: 46;
    --max: 82;
    --bp-min: 414;
    --bp-max: 1024;
    --lh: 0.9;
    --ls: -0.05em;
  }

  @media (min-width: 1024px) {
    .text-display {
      --min: 90;
      --max: 115;
      --bp-min: 1024;
      --bp-max: 1600;
    }
  }
`

export const xlCss = css.resolve`
  .text-display {
    --min: 48;
    --max: 72;
    --bp-min: 414;
    --bp-max: 640;
    --lh: 1;
    --ls: -0.05em;
  }

  @media (min-width: 768px) {
    .text-display {
      --min: 72;
      --max: 120;
      --bp-min: 640;
      --bp-max: 1280;
      --lh: 0.9;
    }
  }

  @media (min-width: 1280px) {
    .text-display {
      --min: 120;
      --max: 180;
      --bp-min: 1280;
      --bp-max: 1600;
      --lh: 0.9;
    }
  }
`
