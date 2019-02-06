import * as React from 'react';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(to left, #ff9176, #ffc093);
`;

const Image = styled.img``;

const Text = styled.section`
  font-size: 20px;
  font-weight: bold;
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
`;

const Icon = styled.svg`
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
`;

export interface LandingProps {}

export default class Landing extends React.Component<LandingProps, any> {
  public render() {
    return (
      <Wrapper>
        <Row gutter={16}>
          <Col span={20}>
            <Row type="flex" justify="start">
              <Icon>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="black"
                  stroke-width="3"
                  fill="red"
                />
              </Icon>
            </Row>
            <Row type="flex" justify="space-around">
              <Text>
                With HealthVet we provide solutions that empower your vision and
                enrich animal healthcare with intuitive collaboration
              </Text>
            </Row>
            <Row type="flex" justify="space-around">
              <Button
                type="primary"
                shape="round"
                icon="usergroup-add"
                size="large"
              >
                Sign up
              </Button>
            </Row>
          </Col>
          <Col span={4}>
            <Row type="flex" justify="space-around">
              <Image />
            </Row>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
