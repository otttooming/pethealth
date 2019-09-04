import * as React from 'react';
import { Button } from '@coterminous/ui';
import Search from '../../components/Search/Search';
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
  font-size: 32px;
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
    const isPatients: boolean = pathname.includes('patients');
    const to: string = isPatients ? '/detail' : '/post';

    return (
      <Wrapper>
        <Left>
          <RightTop>
            <Search />
          </RightTop>
          <RightBottom>
            {hasTitle && <Questions>{title}</Questions>}
          </RightBottom>
        </Left>
        <Right>
          <Link to={to}>
            <Button as="span">Post</Button>
          </Link>
        </Right>
      </Wrapper>
    );
  }
}

export default withRouter<FilterSectionProps>(FilterSection);
