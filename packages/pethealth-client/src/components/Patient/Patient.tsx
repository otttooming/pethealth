import * as React from 'react';
import RX from 'reactxp';
import Button from '../Button';

export interface PatientProps {}

class Patient extends RX.Component<PatientProps, any> {
  public render() {
    return (
      <RX.View>
        <Button>Delete</Button>
      </RX.View>
    );
  }
}

export default Patient;
