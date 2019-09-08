import * as React from 'react';
import styled from 'styled-components';
import catIcon from './cat.svg';
import gutIcon from './Vector.svg';
import plusIcon from './Group.svg';
import { Heading, Avatar } from '@coterminous/ui';
import { User } from 'react-feather';

export interface CardProps {
  title: string;
  doctor: string;
  date: string;
  description: string;
  picture?: string;
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 16px rgba(254, 79, 21, 0.27);
  border-radius: 20px;
  height: 180px;
`;

const Left = styled.div`
  padding: 32px;
`;

const Center = styled.div`
  padding: 20px;
  padding-right: 90px;
  width: 100%;
`;

const Right = styled.div`
  padding: 32px;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  margin-bottom: 0;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;
  height: 60px;

  color: rgba(0, 0, 0, 0.6);
`;

const Date = styled.p`
  font-style: normal;
  font-size: 12px;
  position: relative;

  color: rgba(0, 0, 0, 0.6);
`;

const Name = styled.p`
  font-style: normal;
  font-size: 14px;
  position: relative;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: bold;
`;

const ReadMore = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 15px;
  margin-left: 16px;
  color: #ff6d6d;
`;

class Card extends React.Component<CardProps, any> {
  getTrimmedValue = (value: string, length: number): string => {
    return value.substring(0, length);
  };

  public render() {
    const { doctor, description, title, date } = this.props;

    return (
      <Wrapper>
        <Left>
          <Avatar>
            <User />
          </Avatar>
          <Name>{doctor}</Name>
        </Left>
        <Center>
          <Heading>{title}</Heading>
          <Date>{date}</Date>
          <Description>
            {this.getTrimmedValue(description, 100)}
            {'...'}
            <ReadMore>Read more</ReadMore>
          </Description>
        </Center>
      </Wrapper>
    );
  }
}

export default Card;
