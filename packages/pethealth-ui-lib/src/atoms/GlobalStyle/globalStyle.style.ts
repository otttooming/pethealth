import { css } from 'styled-components';
import { typeface, color } from '../../common/styles/constants';

export const globalStyleCss = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    -webkit-text-size-adjust: none;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    line-height: 1.2;
    font-family: ${typeface.name.primary};
    color: ${color.white};
    background-color: #f2f5f7;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: linear-gradient(56.17deg, #ffc093 0.8%, #ff4848 100%);
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
  }
`;
