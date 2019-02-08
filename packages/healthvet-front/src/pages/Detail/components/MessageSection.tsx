import * as React from 'react';
import styled from 'styled-components';
import Message, { MessageProps } from '../../../components/Message/Message';
import ControlBar from '../../../components/ControlBar/ControlBar';

export interface MessageSectionProps {}

const Wrapper = styled.div`
  padding: 10px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
`;

const Top = styled.div`
  margin-bottom: 32px;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

export default class MessageSection extends React.Component<
  MessageSectionProps,
  any
> {
  messages: MessageProps[] = [
    {
      title: 'Nahainfektsioon suuremal lambakoeral',
      description:
        'Nahainfektsioon suuremal lambakoeral kes on saanud pihta mingi autoga ja tal tuleb vist tagumine jalg üldse otsast ära ja siin on hästi palju teksti suuremal lambakoeral kes on saanud pihta mingi autoga... ',
      icon: '',
    },
    {
      title: null,
      description:
        'Nahainfektsioon suuremal lambakoeral kes on saanud pihta mingi autoga ja tal tuleb vist tagumine jalg üldse otsast ära ja siin on hästi palju teksti suuremal lambakoeral kes on saanud pihta mingi autoga... ',
      icon: '',
    },
  ];

  renderMessages = () => {
    return (
      <UnsortedList>
        {this.messages.map((item, index) => (
          <ListItem key={index}>
            <Message {...item} />
          </ListItem>
        ))}
      </UnsortedList>
    );
  };

  public render() {
    return (
      <Wrapper>
        <Top>
          <ControlBar />
        </Top>
        {this.renderMessages()}
      </Wrapper>
    );
  }
}
