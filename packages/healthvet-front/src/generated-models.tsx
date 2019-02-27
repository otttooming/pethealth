export type Maybe<T> = T | null;

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type AuthLoginVariables = {
  email: string;
  password: string;
};

export type AuthLoginMutation = {
  __typename?: 'Mutation';

  login: AuthLoginLogin;
};

export type AuthLoginLogin = {
  __typename?: 'AuthPayload';

  token: string;
};

export type DashboardListVariables = {};

export type DashboardListQuery = {
  __typename?: 'Query';

  feed: DashboardListFeed[];
};

export type DashboardListFeed = {
  __typename?: 'Post';

  id: string;

  content: Maybe<string>;

  createdAt: DateTime;

  author: DashboardListAuthor;
};

export type DashboardListAuthor = {
  __typename?: 'User';

  name: Maybe<string>;
};

export type GetDashboardListVariables = {};

export type GetDashboardListQuery = {
  __typename?: 'Query';

  feed: GetDashboardListFeed[];
};

export type GetDashboardListFeed = {
  __typename?: 'Post';

  id: string;

  title: string;

  content: Maybe<string>;

  createdAt: DateTime;

  author: GetDashboardListAuthor;
};

export type GetDashboardListAuthor = {
  __typename?: 'User';

  name: Maybe<string>;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';
import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const AuthLoginDocument = gql`
  mutation authLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export class AuthLoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<AuthLoginMutation, AuthLoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<AuthLoginMutation, AuthLoginVariables>
        mutation={AuthLoginDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type AuthLoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<AuthLoginMutation, AuthLoginVariables>
> &
  TChildProps;
export type AuthLoginMutationFn = ReactApollo.MutationFn<
  AuthLoginMutation,
  AuthLoginVariables
>;
export function AuthLoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AuthLoginMutation,
        AuthLoginVariables,
        AuthLoginProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    AuthLoginMutation,
    AuthLoginVariables,
    AuthLoginProps<TChildProps>
  >(AuthLoginDocument, operationOptions);
}
export const DashboardListDocument = gql`
  query dashboardList {
    feed {
      id
      content
      createdAt
      author {
        name
      }
    }
  }
`;
export class DashboardListComponent extends React.Component<
  Partial<ReactApollo.QueryProps<DashboardListQuery, DashboardListVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<DashboardListQuery, DashboardListVariables>
        query={DashboardListDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DashboardListProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<DashboardListQuery, DashboardListVariables>
> &
  TChildProps;
export function DashboardListHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DashboardListQuery,
        DashboardListVariables,
        DashboardListProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    DashboardListQuery,
    DashboardListVariables,
    DashboardListProps<TChildProps>
  >(DashboardListDocument, operationOptions);
}
export const GetDashboardListDocument = gql`
  query getDashboardList {
    feed {
      id
      title
      content
      createdAt
      author {
        name
      }
    }
  }
`;
export class GetDashboardListComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetDashboardListQuery, GetDashboardListVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetDashboardListQuery, GetDashboardListVariables>
        query={GetDashboardListDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetDashboardListProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetDashboardListQuery, GetDashboardListVariables>
> &
  TChildProps;
export function GetDashboardListHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetDashboardListQuery,
        GetDashboardListVariables,
        GetDashboardListProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetDashboardListQuery,
    GetDashboardListVariables,
    GetDashboardListProps<TChildProps>
  >(GetDashboardListDocument, operationOptions);
}
