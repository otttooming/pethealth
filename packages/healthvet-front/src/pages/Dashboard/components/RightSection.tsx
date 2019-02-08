import * as React from 'react';
import styled from 'styled-components';
import ControlBar from '../../../components/ControlBar/ControlBar';
import cat from './kass.svg';

export interface RightSectionProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background: #ffe6d4;
  min-height: 100vh;
  padding: 32px;
`;

const Image = styled.img`
  align-self: flex-end;
  width: 194px;
  height: 194px;
`;

export default class RightSection extends React.Component<
  RightSectionProps,
  any
> {
  public render() {
    return (
      <Wrapper>
        <ControlBar />
        <Image src={cat} alt="" />
      </Wrapper>
    );
  }
}
