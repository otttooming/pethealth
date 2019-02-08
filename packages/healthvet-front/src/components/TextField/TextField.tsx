import * as React from 'react';
import styled from 'styled-components';
import Icon, { IconName } from '../Icon/Icon';

export interface TextFieldProps {
  placeholder: string;
  onSubmit: (value: string) => void;
}

export interface TextFieldState {
  value: string;
}

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  box-shadow: inset 0px 1px 13px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Input = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  padding: 20px;
  height: 98px;
  width: 100%;
  padding-bottom: 0;
  border-radius: 20px;
  background: transparent;
  font-family: Roboto;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    line-height: normal;

    color: rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8px;
  padding-right: 8px;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
`;

export default class TextField extends React.Component<
  TextFieldProps,
  TextFieldState
> {
  static defaultProps = {
    placeholder: '',
    onSubmit: () => {},
  };

  state = {
    value: '',
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    onSubmit(value);
  };

  onInputChange = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = event;

    this.setState({
      value,
    });
  };

  public render() {
    const { placeholder } = this.props;

    return (
      <Wrapper>
        <Input placeholder={placeholder} onChange={this.onInputChange} />
        <IconWrapper>
          <Button onClick={this.handleSubmit}>
            <Icon name={IconName.MAIL} />
          </Button>
        </IconWrapper>
      </Wrapper>
    );
  }
}
