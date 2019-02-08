import * as React from 'react';
import styled from 'styled-components';

export interface ContentProps {}

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
  public render() {
    return (
      <Wrapper>
        There has been a bone fracture in the section 4 and it seems it will be
        cured in 10 - 12 weeks. Right now the cast will be implemented and we
        will see if the recovery will be as fast as we are expecting.
      </Wrapper>
    );
  }
}
