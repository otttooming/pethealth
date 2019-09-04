import * as React from 'react';

interface SearchIconProps {}

const SearchIcon: React.SFC<SearchIconProps> = props => {
  return (
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="3"
        y="3"
        width="19"
        height="19"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1458 14.5833H15.3229L15.0312 14.3021C16.0521 13.1146 16.6667 11.5729 16.6667 9.89583C16.6667 6.15625 13.6354 3.125 9.89583 3.125C6.15625 3.125 3.125 6.15625 3.125 9.89583C3.125 13.6354 6.15625 16.6667 9.89583 16.6667C11.5729 16.6667 13.1146 16.0521 14.3021 15.0312L14.5833 15.3229V16.1458L19.7917 21.3438L21.3438 19.7917L16.1458 14.5833ZM9.89582 14.5833C7.30207 14.5833 5.20832 12.4895 5.20832 9.89578C5.20832 7.30203 7.30207 5.20828 9.89582 5.20828C12.4896 5.20828 14.5833 7.30203 14.5833 9.89578C14.5833 12.4895 12.4896 14.5833 9.89582 14.5833Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="-13.542"
          y="-13.542"
          width="52.083"
          height="52.083"
          fill="#807773"
        />
        <mask
          id="mask1"
          maskUnits="userSpaceOnUse"
          x="-14"
          y="-14"
          width="53"
          height="53"
        >
          <rect
            x="-13.542"
            y="-13.542"
            width="52.083"
            height="52.083"
            fill="#fff"
          />
        </mask>
      </g>
    </svg>
  );
};

export default SearchIcon;
