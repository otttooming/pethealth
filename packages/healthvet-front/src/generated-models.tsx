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

export type CreateMessageVariables = {
  id: string;
  content: string;
};

export type CreateMessageMutation = {
  __typename?: 'Mutation';

  createMessage: CreateMessageCreateMessage;
};

export type CreateMessageCreateMessage = {
  __typename?: 'Message';

  content: Maybe<string>;
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

export type GetHistoriesByPostVariables = {
  id: string;
};

export type GetHistoriesByPostQuery = {
  __typename?: 'Query';

  listHistoriesByPost: GetHistoriesByPostListHistoriesByPost[];
};

export type GetHistoriesByPostListHistoriesByPost = {
  __typename?: 'History';

  title: Maybe<string>;

  content: Maybe<string>;

  createdAt: DateTime;

  author: GetHistoriesByPostAuthor;
};

export type GetHistoriesByPostAuthor = {
  __typename?: 'User';

  name: Maybe<string>;
};

export type GetMessagesByPostVariables = {
  id: string;
};

export type GetMessagesByPostQuery = {
  __typename?: 'Query';

  listMessagesByPost: GetMessagesByPostListMessagesByPost[];
};

export type GetMessagesByPostListMessagesByPost = {
  __typename?: 'Message';

  content: Maybe<string>;

  author: GetMessagesByPostAuthor;
};

export type GetMessagesByPostAuthor = {
  __typename?: 'User';

  name: Maybe<string>;
};

export type GetPostVariables = {
  id: string;
};

export type GetPostQuery = {
  __typename?: 'Query';

  post: Maybe<GetPostPost>;
};

export type GetPostPost = {
  __typename?: 'Post';

  id: string;

  title: string;

  histories: GetPostHistories[];

  messages: GetPostMessages[];
};

export type GetPostHistories = {
  __typename?: 'History';

  title: Maybe<string>;

  content: Maybe<string>;

  createdAt: DateTime;
};

export type GetPostMessages = {
  __typename?: 'Message';

  content: Maybe<string>;
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
export const CreateMessageDocument = gql`
  mutation createMessage($id: ID!, $content: String!) {
    createMessage(postId: $id, content: $content) {
      content
    }
  }
`;
export class CreateMessageComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateMessageMutation, CreateMessageVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateMessageMutation, CreateMessageVariables>
        mutation={CreateMessageDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateMessageProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateMessageMutation, CreateMessageVariables>
> &
  TChildProps;
export type CreateMessageMutationFn = ReactApollo.MutationFn<
  CreateMessageMutation,
  CreateMessageVariables
>;
export function CreateMessageHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateMessageMutation,
        CreateMessageVariables,
        CreateMessageProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateMessageMutation,
    CreateMessageVariables,
    CreateMessageProps<TChildProps>
  >(CreateMessageDocument, operationOptions);
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
export const GetHistoriesByPostDocument = gql`
  query getHistoriesByPost($id: ID!) {
    listHistoriesByPost(postId: $id) {
      title
      content
      createdAt
      author {
        name
      }
    }
  }
`;
export class GetHistoriesByPostComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetHistoriesByPostQuery, GetHistoriesByPostVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetHistoriesByPostQuery, GetHistoriesByPostVariables>
        query={GetHistoriesByPostDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetHistoriesByPostProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetHistoriesByPostQuery, GetHistoriesByPostVariables>
> &
  TChildProps;
export function GetHistoriesByPostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetHistoriesByPostQuery,
        GetHistoriesByPostVariables,
        GetHistoriesByPostProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetHistoriesByPostQuery,
    GetHistoriesByPostVariables,
    GetHistoriesByPostProps<TChildProps>
  >(GetHistoriesByPostDocument, operationOptions);
}
export const GetMessagesByPostDocument = gql`
  query getMessagesByPost($id: ID!) {
    listMessagesByPost(postId: $id) {
      content
      author {
        name
      }
    }
  }
`;
export class GetMessagesByPostComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetMessagesByPostQuery, GetMessagesByPostVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetMessagesByPostQuery, GetMessagesByPostVariables>
        query={GetMessagesByPostDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetMessagesByPostProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetMessagesByPostQuery, GetMessagesByPostVariables>
> &
  TChildProps;
export function GetMessagesByPostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetMessagesByPostQuery,
        GetMessagesByPostVariables,
        GetMessagesByPostProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetMessagesByPostQuery,
    GetMessagesByPostVariables,
    GetMessagesByPostProps<TChildProps>
  >(GetMessagesByPostDocument, operationOptions);
}
export const GetPostDocument = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      histories {
        title
        content
        createdAt
      }
      messages {
        content
      }
    }
  }
`;
export class GetPostComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetPostQuery, GetPostVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetPostQuery, GetPostVariables>
        query={GetPostDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetPostProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetPostQuery, GetPostVariables>
> &
  TChildProps;
export function GetPostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPostQuery,
        GetPostVariables,
        GetPostProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetPostQuery,
    GetPostVariables,
    GetPostProps<TChildProps>
  >(GetPostDocument, operationOptions);
}
