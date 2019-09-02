import * as React from 'react';
import Icon, { IconName } from '../Icon/Icon';
import { Link } from 'react-router-dom';

export interface NavigationBackProps {
  to: string;
}

export default class NavigationBack extends React.Component<
  NavigationBackProps,
  any
> {
  static defaultProps = {
    to: '/',
  };

  public render() {
    const { to } = this.props;
    return (
      <div>
        <Link to={to}>
          <Icon name={IconName.ARROW_LEFT} />
        </Link>
      </div>
    );
  }
}
