import * as React from 'react';
import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';

export interface MessageProps {
  title: string | null;
  description: string;
  icon: string;
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-right: 32px;
`;

const AvatarWrapper = styled.div`
  width: 91px;
  margin-right: 32px;
`;

const Title = styled.h1`
  /* START SENDING MONEY */

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 24px;

  margin-top: 8px;
  margin-bottom: 16px;

  color: rgba(0, 0, 0, 0.6);
`;

const Description = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;

  color: rgba(0, 0, 0, 0.6);
`;

export default class Message extends React.Component<MessageProps, any> {
  static defaultProps = {
    title: null,
  };

  public render() {
    const { title, description } = this.props;
    return (
      <Wrapper>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <div>
          {title && <Title>{title}</Title>}
          <Description>{description}</Description>
        </div>
      </Wrapper>
    );
  }
}
