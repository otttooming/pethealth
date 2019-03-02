import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import Content from './components/Content';
import TextField from '../TextField/TextField';

export interface CardEntrySubmitValues {
  title: string;
  content: string;
}

export interface CardEntryProps {
  title: string;
  icon: string;
  date: string;
  personId: number;
  content: string;
  onSubmit: (values: CardEntrySubmitValues) => void;
  isEditable: boolean;
}

interface State {
  title: string;
  icon: string;
  date: string;
  content: string;
  isEditable: boolean;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  width: 100%;
  min-height: 182px;

  background: #ffffff;
  border-radius: 20px;
  padding: 16px;
  padding-right: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const EditableTitle = styled.textarea`
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

export default class CardEntry extends React.Component<CardEntryProps, State> {
  static defaultProps = {
    onSubmit: () => null,
    isEditable: false,
  };

  constructor(props: CardEntryProps) {
    super(props);

    const { onSubmit, ...restProps } = props;

    this.state = {
      ...restProps,
    };
  }

  changeMessageText = (value: string) => {
    var newDate = new Date();
    var day = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();

    this.setState(
      {
        content: value,
        isEditable: false,
        date: `${day < 10 ? `0${day}` : `${day}`}:${
          month < 10 ? `0${month}` : `${month}`
        }:${year} `,
      },
      this.onSubmit,
    );
  };

  onSubmit = () => {
    const { onSubmit } = this.props;
    const { content, title } = this.state;

    onSubmit({ content, title });
  };

  handleTitleUpdate = (event: any) => {
    const {
      currentTarget: { value },
    } = event;

    this.setState({
      title: value,
    });
  };

  changeEditable = () => {
    this.setState({
      isEditable: true,
    });
  };

  public render() {
    return (
      <Wrapper>
        {this.state.isEditable ? (
          <EditableTitle
            defaultValue={this.state.title}
            placeholder="Write your title here"
            onChange={this.handleTitleUpdate}
          />
        ) : (
          <Header
            title={this.state.title}
            date={this.state.date}
            onClick={this.changeEditable}
          />
        )}

        {this.state.isEditable ? (
          <TextField
            defaultValue={this.state.content}
            placeholder="Write your text here"
            onSubmit={this.changeMessageText}
          />
        ) : (
          <Content onClick={this.changeEditable} value={this.state.content} />
        )}

        <Footer />
      </Wrapper>
    );
  }
}
