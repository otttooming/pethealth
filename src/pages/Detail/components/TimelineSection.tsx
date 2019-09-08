import * as React from 'react';
import styled from 'styled-components';
import Title from '../../../components/Title/Title';
import Icon, { IconName } from '../../../components/Icon/Icon';
import {
  GetHistoriesByPostComponent,
  GetHistoriesByPostQuery,
} from '../../../generated-models';
import CardEntry from '../../../components/CardEntry/CardEntry';
import EditCard from './EditCard';
import NavigationBack from '../../../components/NavigationBack/NavigationBack';

export interface TimelineSectionProps {
  postId: string;
  isAlternativeLayout: boolean;
}

export interface TimelineSectionState {
  hasEditCard: boolean;
}

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 32px;
  background: #f4f4f4;
`;

const UnsortedList = styled.ul`
  margin: 0;
  padding: 0;

  padding-left: 40px;
  border-left: 1px solid rgba(35, 31, 32, 0.2);
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  margin-bottom: 32px;

  &::before {
    content: '';
    position: absolute;
    border: 1px solid rgba(35, 31, 32, 0.2);
    border-bottom-width: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 27px;
    right: 0;
    left: -40px;
  }
`;

interface TitleWrapperProps {
  isAlternativeLayout: boolean;
}

const TitleWrapper = styled.div<TitleWrapperProps>`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    margin-left: ${({ isAlternativeLayout }) =>
      isAlternativeLayout ? '24px' : '0px'};
  }
`;

export default class TimelineSection extends React.Component<
  TimelineSectionProps,
  TimelineSectionState
> {
  static defaultProps = {
    isAlternativeLayout: false,
  };

  constructor(props: TimelineSectionProps) {
    super(props);

    this.state = {
      hasEditCard: false,
    };
  }

  addItem = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    this.setState({ hasEditCard: true });
  };

  renderCardItems = (data: GetHistoriesByPostQuery | undefined) => {
    if (!data) {
      return null;
    }

    const { listHistoriesByPost = [] } = data;

    return listHistoriesByPost.map(({ title, createdAt, content }, key) => (
      <ListItem key={key}>
        <CardEntry
          title={title || ''}
          date={createdAt}
          icon=""
          content={content || ''}
          personId={1}
        />
      </ListItem>
    ));
  };

  public render() {
    const { postId: id, isAlternativeLayout } = this.props;
    const { hasEditCard } = this.state;

    return (
      <GetHistoriesByPostComponent variables={{ id }}>
        {({ data }) => (
          <Wrapper>
            <TitleWrapper isAlternativeLayout={isAlternativeLayout}>
              {isAlternativeLayout && <NavigationBack to="/browse" />}

              <Title>Medical history</Title>
            </TitleWrapper>
            <UnsortedList>
              {this.renderCardItems(data)}

              {hasEditCard && (
                <ListItem>
                  <EditCard />
                </ListItem>
              )}

              <ListItem>
                <a href="#" onClick={this.addItem}>
                  <Icon name={IconName.PLUS} />
                </a>
              </ListItem>
            </UnsortedList>
          </Wrapper>
        )}
      </GetHistoriesByPostComponent>
    );
  }
}
