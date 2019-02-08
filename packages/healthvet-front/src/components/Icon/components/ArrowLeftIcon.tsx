import * as React from 'react';

interface ArrowLeftIconProps {}

const ArrowLeftIcon: React.SFC<ArrowLeftIconProps> = props => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0"
      maskUnits="userSpaceOnUse"
      x="5"
      y="11"
      width="34"
      height="22"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.5 20.1667H12.5217L19.085 13.585L16.5 11L5.5 22L16.5 33L19.085 30.415L12.5217 23.8333H38.5V20.1667Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect
        x="-23.834"
        y="-23.833"
        width="91.667"
        height="91.667"
        fill="#000"
      />
      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="-24"
        y="-24"
        width="92"
        height="92"
      >
        <rect
          x="-23.834"
          y="-23.833"
          width="91.667"
          height="91.667"
          fill="#fff"
        />
      </mask>
    </g>
  </svg>
);

export default ArrowLeftIcon;
