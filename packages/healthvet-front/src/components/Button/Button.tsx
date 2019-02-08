import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {}

const Wrapper = styled.button`
  background: #ff6d6d;
  border-radius: 90px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 17px;
  text-align: center;

  color: #ffffff;
  padding: 8px 40px;
  border-radius: 90px;

  border: 0;

  box-shadow: 2px 2px 10px rgba(254, 79, 21, 0.3);
`;

export default class Button extends React.Component<ButtonProps, any> {
  public render() {
    const { children } = this.props;

    return <Wrapper>{children}</Wrapper>;
  }
}
