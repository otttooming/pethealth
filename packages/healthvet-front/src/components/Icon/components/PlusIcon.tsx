import * as React from 'react';

interface PlusIconProps {}

const PlusIcon: React.FC<PlusIconProps> = props => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" rx="25" fill="#FF6D6D" />
    <rect x="23" y="13" width="4" height="24" fill="#fff" />
    <rect
      x="37"
      y="23"
      width="4"
      height="24"
      transform="rotate(90 37 23)"
      fill="#fff"
    />
  </svg>
);

export default PlusIcon;
