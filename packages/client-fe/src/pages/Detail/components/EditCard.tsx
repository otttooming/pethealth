import * as React from 'react';
import CardEntry, {
  CardEntryProps,
  CardEntrySubmitValues,
} from '../../../components/CardEntry/CardEntry';
import {
  withCreateHistory,
  CreateHistoryMutation,
  CreateHistoryMutationVariables,
} from '../../../generated-models';
import { MutateProps } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router';

interface Params {
  id: string;
}

type HocExtends = MutateProps<
  CreateHistoryMutation,
  CreateHistoryMutationVariables
> &
  CardEntryProps;

export interface EditCardProps
  extends RouteComponentProps<Params>,
    HocExtends {}

class EditCard extends React.Component<EditCardProps, any> {
  public render() {
    return (
      <div>
        <CardEntry
          title={''}
          date={''}
          content={''}
          icon=""
          personId={1}
          onSubmit={this.handleSubmit}
          isEditable={true}
        />
      </div>
    );
  }

  private handleSubmit = async (values: CardEntrySubmitValues) => {
    const {
      mutate,
      match: {
        params: { id },
      },
    } = this.props;

    await mutate({ variables: { ...values, id } });
  };
}

const withwithCreateHistory = withCreateHistory({});

// @ts-ignore
export default withwithCreateHistory(withRouter<EditCardProps>(EditCard));
