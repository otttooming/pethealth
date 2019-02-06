import * as React from 'react';
import { Row, Col, Button } from 'antd';

export interface LandingProps {}

export default class Landing extends React.Component<LandingProps, any> {
  public render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12} />
          <Col span={12} />
        </Row>
      </div>
    );
  }
}
