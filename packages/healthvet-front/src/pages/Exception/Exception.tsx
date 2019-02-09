import * as React from 'react';
import { default as AntException } from 'ant-design-pro/lib/Exception';
import styled from 'styled-components';
import img_404_duck from './duck.webp';
import img_404_hamster from './hamster.webp';
import logo from './logo-valge.svg';
import { Link } from 'react-router-dom';

const Logo = styled.img`
  left: 0;
  top: 0;
  padding: 56px;
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
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Image src={img_404_duck} />

        {/* <NotFoundText>Page not found</NotFoundText> */}
      </div>
    );
  }
}
