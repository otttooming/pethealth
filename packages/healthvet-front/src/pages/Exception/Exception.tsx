import * as React from 'react';
import { default as AntException } from 'ant-design-pro/lib/Exception';

export interface ExceptionProps {}

export default class Exception extends React.Component<ExceptionProps, any> {
  public render() {
    return <AntException type="404" />;
  }
}
