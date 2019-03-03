import * as React from 'react';
import styled from 'styled-components';

export interface PatientCardProps {
  title: string;
  doctor: string;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 16px rgba(254, 79, 21, 0.27);
  border-radius: 20px;
  height: 140px;
`;

const Title = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 24px;
  margin-bottom: 30px;

  color: rgba(0, 0, 0, 0.6);
`;

const Name = styled.p`
  font-style: normal;
  font-size: 14px;
  position: relative;
  color: rgb(0, 0, 0, 0.2);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: bold;
`;

class PatientCard extends React.Component<PatientCardProps, any> {
  static defaultProps = {
    hasIcons: false,
  };

  getTrimmedValue = (value: string, length: number): string => {
    return value.substring(0, length);
  };

  public render() {
    const { doctor, title } = this.props;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Name>{doctor}</Name>
      </Wrapper>
    );
  }
}

export default PatientCard;
