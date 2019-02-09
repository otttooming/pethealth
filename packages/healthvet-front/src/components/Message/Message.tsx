import * as React from 'react';
import Avatar, { AvatarSize } from '../Avatar/Avatar';
import styled from 'styled-components';
import avatar from './Avatar1.png';

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

interface AvatarWrapperProps {
  hasTitle: boolean;
}

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: 91px;
  margin-right: 32px;
  padding-left: ${({ hasTitle }) => (hasTitle ? '0px' : '24px')};
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 22px;

  margin-top: 8px;
  margin-bottom: 16px;

  color: rgba(0, 0, 0, 0.6);
`;

const Description = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 0;
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
        <AvatarWrapper hasTitle={!!title}>
          {!title ? (
            <Avatar size={AvatarSize.INTERMEDIATE} src={avatar} />
          ) : (
            <Avatar src={avatar} />
          )}
        </AvatarWrapper>
        <div>
          {title && <Title>{title}</Title>}
          <Description>{description}</Description>
        </div>
      </Wrapper>
    );
  }
}
