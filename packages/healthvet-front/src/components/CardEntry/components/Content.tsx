import * as React from 'react';
import styled from 'styled-components';

export interface ContentProps {
  value: string;
  onClick: (event: any) => void;
}

const Wrapper = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  padding-left: 60px;
  padding-bottom: 8px;
  color: rgba(0, 0, 0, 0.6);
`;

export default class Content extends React.Component<ContentProps, any> {
  handleClick = (event: any) => {
    const { onClick } = this.props;
    onClick(event);
  };

  public render() {
    return <Wrapper onClick={this.handleClick}>{this.props.value}</Wrapper>;
  }
}
