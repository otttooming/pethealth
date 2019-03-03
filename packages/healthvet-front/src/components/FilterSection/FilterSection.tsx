import * as React from 'react';
import Search from '../../components/Search/Search';
import Button, { ButtonType } from '../../components/Button/Button';
import styled from 'styled-components';
import Icon, { IconName } from '../../components/Icon/Icon';
import Squareblocks from '../../components/Icon/components/Squareblocks';
import Select from '../../components/Select/Select';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

export interface FilterSectionProps extends RouteComponentProps {
  title: string | null;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Questions = styled.p`
  margin-bottom: 0;
  margin-right: 16px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
`;
const RightTop = styled.div`
  margin-bottom: 32px;
`;
const LeftTop = styled.div`
  margin-bottom: 32px;
`;

const Left = styled.div`
  margin-bottom: 32px;
`;

const RightBottom = styled.div`
  display: flex;
  align-items: center;
`;

class FilterSection extends React.Component<FilterSectionProps> {
  static defaultProps = {
    title: null,
  };
  public render() {
    const {
      title,
      location: { pathname },
    } = this.props;

    const hasTitle: boolean = Boolean(title);
    const isForum: boolean = pathname.includes('forum');
    const to: string = isForum ? '/post' : '/detail';

    return (
      <Wrapper>
        <Left>
          <RightTop>
            <Search />
          </RightTop>
          <RightBottom>
            {hasTitle && <Questions>{title}</Questions>}

            <Select>Filter</Select>
          </RightBottom>
        </Left>
        <Right>
          <LeftTop>
            <Link to={to}>
              <Button as={ButtonType.SPAN}>Post</Button>
            </Link>
          </LeftTop>
          <Icon name={IconName.SQUAREBLOCKS} />
        </Right>
      </Wrapper>
    );
  }
}

export default withRouter<FilterSectionProps>(FilterSection);
