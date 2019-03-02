import * as React from 'react';
import CardEntry, {
  CardEntryProps,
  CardEntrySubmitValues,
} from '../../../components/CardEntry/CardEntry';
import {
  CreateHistoryHOC,
  CreateHistoryMutation,
  CreateHistoryVariables,
} from '../../../generated-models';
import { MutateProps } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router';

interface Params {
  id: string;
}

type HocExtends = MutateProps<CreateHistoryMutation, CreateHistoryVariables> &
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
      location: {
        state: { id },
      },
    } = this.props;

    await mutate({ variables: { ...values, id } });
  };
}

const withCreateHistoryHOC = CreateHistoryHOC({});

export default withCreateHistoryHOC(withRouter<EditCardProps>(EditCard));
