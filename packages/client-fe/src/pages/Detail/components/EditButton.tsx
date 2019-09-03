import * as React from 'react';
import CardEntry, {
  CardEntryProps,
  CardEntrySubmitValues,
} from '../../../components/CardEntry/CardEntry';
import {
  withCreatePatient,
  CreatePatientMutation,
  CreatePatientMutationVariables,
} from '../../../generated-models';
import { MutateProps } from 'react-apollo';
import { withRouter, RouteComponentProps, Omit } from 'react-router';
import Button from '../../../components/Button';

interface Params {
  id: string;
}

type HocExtends = MutateProps<
  CreatePatientMutation,
  CreatePatientMutationVariables
>;

export interface EditButtonOptions {
  species: string;
  breed: string;
  sex: string;
  age: string;
  weight: string;
}

export interface OwnProps {
  onChangeEditable: () => void;
  options: Partial<EditButtonOptions>;
}

export interface EditButtonProps
  extends RouteComponentProps<Params>,
    HocExtends,
    OwnProps {}

class EditButton extends React.Component<EditButtonProps, any> {
  static defaultProps = {
    onChangeEditable: () => null,
  };

  public render() {
    return (
      <div>
        <Button onClick={this.handleSubmit}> Save </Button>
      </div>
    );
  }

  private getVariables = (): CreatePatientMutationVariables => {
    const {
      options: { age: dob, weight, species, breed },
      match: {
        params: { id },
      },
    } = this.props;

    const variables: CreatePatientMutationVariables = {
      dob,
      weight: Number(weight),
      species,
      breed,
      id,
    };

    return variables;
  };

  private handleSubmit = async () => {
    const {
      onChangeEditable,
      mutate,
      match: {
        params: { id },
      },
      options,
    } = this.props;

    onChangeEditable();

    const variables: CreatePatientMutationVariables = this.getVariables();

    await mutate({ variables: { ...variables } });
  };
}

const withCreatePatientHOC = withCreatePatient<OwnProps>({});

// @ts-ignore
export default withCreatePatientHOC(withRouter<EditButtonProps>(EditButton));
