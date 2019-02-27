import { css } from 'styled-components';
import { theme } from '../../';

const common = css`
  margin: 0 0 ${theme.spacing.medium} 0;
  font-weight: ${theme.typeface.weight.bold};
  font-family: Nunito, sans-serif;
  font-style: normal;
  line-height: 1.5;
  margin: 16px 0 0 0;
  color: rgba(0, 0, 0, 0.6);

  &:first-child {
    margin-top: 0;
  }
`;

export const H1Style = css`
  ${common};
  font-size: 26px;
`;

export const H2Style = css`
  ${common};
`;

export const H3Style = css`
  ${common};
`;

export const H4Style = css`
  ${common};
`;

export const H5Style = css`
  ${common};
`;

export const H6Style = css`
  ${common};
`;
