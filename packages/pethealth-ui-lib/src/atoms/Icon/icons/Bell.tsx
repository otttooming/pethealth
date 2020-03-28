import * as React from 'react';

interface BellIconProps {}

const BellIcon: React.SFC<BellIconProps> = props => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="dajkljafkdfa"
      maskUnits="userSpaceOnUse"
      x="3"
      y="2"
      width="18"
      height="21"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM18.88 16.82V11C18.88 7.75 16.63 5.03 13.59 4.31V3.59C13.59 2.71 12.88 2 12 2C11.12 2 10.41 2.71 10.41 3.59V4.31C7.37 5.03 5.12 7.75 5.12 11V16.82L3 18.94V20H21V18.94L18.88 16.82Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#dajkljafkdfa)">
      <rect x="-13" y="-13" width="50" height="50" fill="#FF6D6D" />
      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="-13"
        y="-13"
        width="50"
        height="50"
      >
        <rect x="-13" y="-13" width="50" height="50" fill="#fff" />
      </mask>
    </g>
  </svg>
);

export default BellIcon;