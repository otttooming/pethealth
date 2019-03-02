import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  onClick: () => void;
  className?: string;
}

const Wrapper = styled.button`
  background: #ff6d6d;
  border-radius: 90px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  font-size: 17px;
  text-align: center;

  color: #ffffff;
  padding: 8px 40px;
  border-radius: 90px;
  margin-bottom: 5px;

  border: 0;

  box-shadow: 2px 2px 10px rgba(254, 79, 21, 0.3);
`;

class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    onClick: () => null,
  };

  public render() {
    const { children, className } = this.props;

    return (
      <Wrapper className={className} onClick={this.onClick}>
        {children}
      </Wrapper>
    );
  }

  private onClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const { onClick } = this.props;

    event.preventDefault();

    onClick();
  };
}

export default Button;
