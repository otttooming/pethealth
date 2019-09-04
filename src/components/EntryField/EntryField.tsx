import * as React from 'react';
import styled from 'styled-components';

export interface EntryFieldProps {
  isEditable: boolean;
  value: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  onChange: (
    event: React.SyntheticEvent<HTMLTextAreaElement>,
    type: string,
  ) => void;
}

export interface EntryFieldState {
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
  height: 20px;
  width: 160px;
  padding-bottom: 0;
  padding-left: 12px;
  padding-top: 4px;
  overflow: hidden;
  border-radius: 20px;
  background: transparent;
  font-family: Roboto;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    line-height: normal;

    color: rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  width: 160px;
`;

export default class EntryField extends React.Component<
  EntryFieldProps,
  EntryFieldState
> {
  static defaultProps = {
    isEditable: '',
    type: '',
    defaultValue: '',
    placeholder: '',
    onInputChange: () => {},
  };

  state = {
    value: '',
  };

  handleChange = (event: any) => {
    const { onChange } = this.props;
    const {
      currentTarget: { value },
    } = event;

    this.setState({
      value: value,
    });

    onChange(event, this.props.type);
  };

  public render() {
    const { placeholder, isEditable, value } = this.props;

    return (
      <td>
        {isEditable ? (
          <Wrapper>
            <Input
              placeholder={placeholder}
              defaultValue={this.props.defaultValue}
              onChange={this.handleChange}
            />
          </Wrapper>
        ) : (
          <Content>{value}</Content>
        )}
      </td>
    );
  }
}
