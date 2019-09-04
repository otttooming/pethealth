import * as React from 'react';
import styled from 'styled-components';

export interface InputFieldProps {}

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

export default class InputField extends React.Component<InputFieldProps, any> {
  public render() {
    return (
      <Wrapper>
        <textarea>gfd</textarea>
      </Wrapper>
    );
  }
}
