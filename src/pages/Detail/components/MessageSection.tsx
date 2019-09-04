import * as React from 'react';
import styled from 'styled-components';
import Message, { MessageProps } from '../../../components/Message/Message';
import ControlBar from '../../../components/ControlBar/ControlBar';
import TextField from '../../../components/TextField/TextField';
import { ScrollTo, ScrollArea } from 'react-scroll-to';
import Title from '../../../components/Title/Title';
import {
  GetMessagesByPostComponent,
  CreateMessageComponent,
  CreateMessageMutationFn,
} from '../../../generated-models';

const ScroolAreaFixed: any = ScrollArea;

export interface MessageSectionProps {
  postId: string;
}
export interface MessageSectionState {
  messages: MessageProps[];
}

const Wrapper = styled.div`
  padding: 10px;
  position: relative;
  padding: 32px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Footer = styled.div`
  position: sticky;
  bottom: 0;
`;

export default class MessageSection extends React.Component<
  MessageSectionProps,
  any
> {
  messages: MessageProps[] = [
    {
      title: 'Gastointestinal problems',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems. Any disorder that reduces the digestion.`,
      icon: '',
    },
    {
      title: null,
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems.`,
      icon: '',
    },
  ];

  state = {
    messages: this.messages,
  };

  refetch: (() => void) | null = null;

  renderMessages = () => {
    const { postId: id } = this.props;

    if (!id) {
      return null;
    }

    return (
      <GetMessagesByPostComponent variables={{ id }}>
        {({ data, refetch }) => {
          if (!data) {
            return null;
          }

          this.refetch = refetch;

          const { listMessagesByPost = [] } = data;

          return (
            <UnsortedList>
              {listMessagesByPost.map(({ content }, index) => (
                <ListItem key={index}>
                  <Message description={content || ''} icon="" />
                </ListItem>
              ))}
            </UnsortedList>
          );
        }}
      </GetMessagesByPostComponent>
    );
  };

  createNewMessage = (description: string) => {
    const { messages } = this.state;

    const message: MessageProps = {
      title: '',
      description: `Gastrointestinal (GI) disorders and diseases affect a dog's stomach and intestines, resulting in pain and other problems.`,
      icon: '',
    };

    this.setState({
      messages: [...messages, message],
    });
  };

  renderTextField = () => {
    return (
      <CreateMessageComponent>
        {request => (
          <TextField
            placeholder="Write your text here"
            onSubmit={this.createMessage(request)}
          />
        )}
      </CreateMessageComponent>
    );
  };

  public render() {
    return (
      <ScrollTo>
        {({ scrollTo }) => (
          <ScroolAreaFixed id="foo">
            <Wrapper>
              <div>
                <Top>
                  <Title>Messages</Title>
                  <ControlBar />
                </Top>

                {this.renderMessages()}
              </div>

              <Footer>{this.renderTextField()}</Footer>
            </Wrapper>
          </ScroolAreaFixed>
        )}
      </ScrollTo>
    );
  }

  private createMessage = (request: CreateMessageMutationFn) => async (
    content: string,
  ): Promise<void> => {
    const { postId: id } = this.props;

    const options = { variables: { id, content } };

    await request(options);

    if (this.refetch) {
      this.refetch();
    }
  };
}
