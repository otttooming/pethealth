import * as React from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import DescriptionList from 'ant-design-pro/lib/DescriptionList';
import { Button, Menu, Dropdown, Icon, Row, Col } from 'antd';
import styled from 'styled-components';

const { Description } = DescriptionList;
const ButtonGroup = Button.Group;

export interface DashboardProps {}

const content = (
  <div>
    <p>
      Rare and exceptional condition. <br />
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
    </p>
    <div className="link">
      <a>
        <img
          alt=""
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        />{' '}
        Send histrory
      </a>
      <a>
        <img
          alt=""
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        />{' '}
        More info
      </a>
      <a>
        <img
          alt=""
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        />{' '}
        Get printout
      </a>
    </div>
  </div>
);

const extra = (
  <div className="imgContainer">
    <img
      style={{ width: '100%', maxWidth: 200 }}
      alt=""
      src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
    />
  </div>
);

const breadcrumbList = [
  {
    title: 'Disease 1',
    href: '/abc',
  },
  {
    title: 'Disease 2',
    href: '/abc2',
  },
  {
    title: 'Disease 3',
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">Action 1</Menu.Item>
    <Menu.Item key="2">Action 2</Menu.Item>
    <Menu.Item key="3">Action 3</Menu.Item>
  </Menu>
);

const action = (
  <div>
    <ButtonGroup>
      <Button>Menu</Button>
      <Button>Menu 2</Button>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>
          <Icon type="ellipsis" />
        </Button>
      </Dropdown>
    </ButtonGroup>
    <Button type="primary">CTA</Button>
  </div>
);

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 32px;
  max-width: 1080px;
`;

export default class Dashboard extends React.Component<DashboardProps, any> {
  public render() {
    return (
      <ul>
        <ListItem>
          <PageHeader
            title="Title of the card"
            action={action}
            content={content}
            extraContent={extra}
            breadcrumbList={breadcrumbList}
          />
        </ListItem>
        <ListItem>
          <PageHeader
            title="Title of the card"
            action={action}
            content={content}
            extraContent={extra}
            breadcrumbList={breadcrumbList}
          />
        </ListItem>
        <ListItem>
          <PageHeader
            title="Title of the card"
            content={content}
            extraContent={extra}
            breadcrumbList={breadcrumbList}
          />
        </ListItem>
        <ListItem>
          <PageHeader
            title="Title of the card"
            action={action}
            content={content}
            extraContent={extra}
            breadcrumbList={breadcrumbList}
          />
        </ListItem>
      </ul>
    );
  }
}
