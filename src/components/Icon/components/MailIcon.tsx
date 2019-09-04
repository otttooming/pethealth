import * as React from 'react';

interface MailIconProps {}

const MailIcon: React.FC<MailIconProps> = props => (
  <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="22.5"
      cy="22.5"
      r="22.5"
      fill="#FF6D6D"
      filter="url(#filter0_i)"
    />
    <mask
      id="mask03123213"
      maskUnits="userSpaceOnUse"
      x="13"
      y="14"
      width="21"
      height="18"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8425 31.25L33.0833 23L13.8425 14.75L13.8333 21.1667L27.5833 23L13.8333 24.8333L13.8425 31.25Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#mask03123213)">
      <rect x="0.083" y="0.083" width="45.833" height="45.833" fill="#fff" />
      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="46"
        height="46"
      >
        <rect x="0.083" y="0.083" width="45.833" height="45.833" fill="#fff" />
      </mask>
    </g>
    <defs>
      <filter
        id="filter0_i"
        x="0"
        y="0"
        width="45"
        height="49"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0.868996 0 0 0 0 0.375264 0 0 0 0 0.375264 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);

export default MailIcon;
