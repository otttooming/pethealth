import * as React from 'react';
import CardEntry, {
  CardEntryProps,
  CardEntrySubmitValues,
} from '../../../components/CardEntry/CardEntry';
import {
  CreateHistoryHOC,
  CreateHistoryMutation,
  CreateHistoryVariables,
  CreatePatientHOC,
  CreatePatientMutation,
  CreatePatientVariables,
} from '../../../generated-models';
import { MutateProps } from 'react-apollo';
import { withRouter, RouteComponentProps, Omit } from 'react-router';
import Button from '../../../components/Button';

interface Params {
  id: string;
}

type HocExtends = MutateProps<CreatePatientMutation, CreatePatientVariables>;

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

  private getVariables = (): CreatePatientVariables => {
    const {
      options: { age: dob, weight, species, breed },
      match: {
        params: { id },
      },
    } = this.props;

    const variables: CreatePatientVariables = {
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

    const variables: CreatePatientVariables = this.getVariables();

    await mutate({ variables: { ...variables } });
  };
}

const withCreatePatientHOC = CreatePatientHOC<OwnProps>({});

export default withCreatePatientHOC(withRouter<EditButtonProps>(EditButton));
