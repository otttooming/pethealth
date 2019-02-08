import * as React from 'react';
import styled from 'styled-components';
import ControlBar from '../../../components/ControlBar/ControlBar';

export interface RightSectionProps {}

const Wrapper = styled.div`
  background: #ffe6d4;
  min-height: 100vh;
  padding: 32px;
`;

export default class RightSection extends React.Component<
  RightSectionProps,
  any
> {
  public render() {
    return (
      <Wrapper>
        <ControlBar />
      </Wrapper>
    );
  }
}
