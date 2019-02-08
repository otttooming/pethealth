import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconName } from '../Icon/Icon';

export interface SelectProps {}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 90px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 14px;
  text-align: center;

  color: rgba(0, 0, 0, 0.12);
  padding: 4px 24px;
  border-radius: 90px;

  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 90px;
`;

export default class Select extends React.Component<SelectProps, any> {
  public render() {
    const { children } = this.props;

    return (
      <Wrapper>
        {children}
        <Icon
          name={IconName.ARROW}
          style={{ width: 20, height: 20, marginLeft: 4 }}
        />
      </Wrapper>
    );
  }
}
