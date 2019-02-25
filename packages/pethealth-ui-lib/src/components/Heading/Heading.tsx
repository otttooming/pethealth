import * as React from 'react';
import {
  H1Style,
  H2Style,
  H3Style,
  H4Style,
  H5Style,
  H6Style,
} from './Heading.style';
import styled from 'styled-components';

// Enum must be exported or 'has or is using private name' error will occur
export enum TagName {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export interface Props
  extends Partial<React.HTMLAttributes<HTMLHeadingElement>> {
  children?: React.ReactChild;
  tagName?: TagName;
  className?: string;
}

// type Props = Props1 & Partial<React.HTMLAttributes<HTMLHeadingElement>>;

class HeadingBase extends React.Component<Props, {}> {
  render() {
    const {
      className,
      children,
      tagName = TagName.H1,
      ...restProps
    } = this.props;

    const attributes = {
      ...restProps,
      className,
    };

    switch (tagName) {
      case TagName.H1:
        return <h1 {...attributes}>{this.renderChildren()}</h1>;
      case TagName.H2:
        return <h2 {...attributes}>{this.renderChildren()}</h2>;
      case TagName.H3:
        return <h3 {...attributes}>{this.renderChildren()}</h3>;
      case TagName.H4:
        return <h4 {...attributes}>{this.renderChildren()}</h4>;
      case TagName.H5:
        return <h5 {...attributes}>{this.renderChildren()}</h5>;
      case TagName.H6:
        return <h6 {...attributes}>{this.renderChildren()}</h6>;
      default:
        return null;
    }
  }

  renderChildren = () => {
    const { children } = this.props;

    return children;
  };
}

export const Heading = {
  H1: styled(HeadingBase).attrs({
    tagName: TagName.H1,
  })`
    ${H1Style};
  `,
  H2: styled(HeadingBase).attrs({
    tagName: TagName.H2,
  })`
    ${H2Style};
  `,
  H3: styled(HeadingBase).attrs({
    tagName: TagName.H3,
  })`
    ${H3Style};
  `,
  H4: styled(HeadingBase).attrs({
    tagName: TagName.H4,
  })`
    ${H4Style};
  `,
  H5: styled(HeadingBase).attrs({
    tagName: TagName.H5,
  })`
    ${H5Style};
  `,
  H6: styled(HeadingBase).attrs({
    tagName: TagName.H6,
  })`
    ${H6Style};
  `,
};
