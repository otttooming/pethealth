import * as React from 'react';
import styled from 'styled-components';
import ControlBar from '../../../components/ControlBar/ControlBar';
import snek from './Images/snek.svg';

export interface RightSectionProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background: #ffe7d6;
  min-height: 100vh;
  padding: 32px;
`;

const Image = styled.img`
  align-self: flex-end;
`;

export default class RightSection extends React.Component<
  RightSectionProps,
  any
> {
  public render() {
    return (
      <Wrapper>
        <ControlBar />
        <Image src={snek} alt="" />
      </Wrapper>
    );
  }
}
