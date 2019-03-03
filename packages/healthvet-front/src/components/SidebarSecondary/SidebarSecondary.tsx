import * as React from 'react';
import styled from 'styled-components';
import ControlBar from '../../components/ControlBar/ControlBar';
import cat from './kass.svg';
import bird from './bird.svg';

export interface RightSectionProps {
  type: string;
}

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
  width: 80%;
`;

export default class RightSection extends React.Component<
  RightSectionProps,
  any
> {
  public render() {
    const img = this.props.type === 'cat' ? cat : bird;
    return (
      <Wrapper>
        <ControlBar />
        <Image src={img} alt="" />
      </Wrapper>
    );
  }
}
