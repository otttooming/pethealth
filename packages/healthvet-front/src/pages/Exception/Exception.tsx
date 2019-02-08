import * as React from 'react';
import { default as AntException } from 'ant-design-pro/lib/Exception';
import styled from 'styled-components';
import img_404 from './part.gif';
import logo from './logo-valge.svg';

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 56px;
  width: 15%;
  position: absolute;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60%;
  border: none;
  margin: -1px;
`;

const NotFoundText = styled.h2`
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
  font-size: 28px;
  margin-right: 80px;
  margin-bottom: 32px;
  font-weight: normal;
`;

export interface ExceptionProps {}

export default class Exception extends React.Component<ExceptionProps, any> {
  public render() {
    return (
      <div>
        <Logo src={logo} />
        <Image src={img_404} />
        <NotFoundText>Page not found</NotFoundText>
      </div>
    );
  }
}
