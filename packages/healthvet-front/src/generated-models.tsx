export type Maybe<T> = T | null;

export enum PostType {
  MedicalRecord = 'MEDICAL_RECORD',
  ForumPost = 'FORUM_POST',
}

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

export type CreateDraftVariables = {
  title: string;
};

export type CreateDraftMutation = {
  __typename?: 'Mutation';

  createDraft: CreateDraftCreateDraft;
};

export type CreateDraftCreateDraft = {
  __typename?: 'Post';

  id: string;

  title: string;
};

export type CreateHistoryVariables = {
  id: string;
  title: string;
  content: string;
};

export type CreateHistoryMutation = {
  __typename?: 'Mutation';

  createHistory: CreateHistoryCreateHistory;
};

export type CreateHistoryCreateHistory = {
  __typename?: 'History';

  id: string;
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

export type DeletePostVariables = {
  id: string;
};

export type DeletePostMutation = {
  __typename?: 'Mutation';

  deletePost: Maybe<DeletePostDeletePost>;
};

export type DeletePostDeletePost = {
  __typename?: 'Post';

  id: string;
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
export const CreateDraftDocument = gql`
  mutation createDraft($title: String!) {
    createDraft(title: $title) {
      id
      title
    }
  }
`;
export class CreateDraftComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateDraftMutation, CreateDraftVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateDraftMutation, CreateDraftVariables>
        mutation={CreateDraftDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateDraftProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateDraftMutation, CreateDraftVariables>
> &
  TChildProps;
export type CreateDraftMutationFn = ReactApollo.MutationFn<
  CreateDraftMutation,
  CreateDraftVariables
>;
export function CreateDraftHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateDraftMutation,
        CreateDraftVariables,
        CreateDraftProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateDraftMutation,
    CreateDraftVariables,
    CreateDraftProps<TChildProps>
  >(CreateDraftDocument, operationOptions);
}
export const CreateHistoryDocument = gql`
  mutation createHistory($id: ID!, $title: String!, $content: String!) {
    createHistory(postId: $id, title: $title, content: $content) {
      id
    }
  }
`;
export class CreateHistoryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateHistoryMutation, CreateHistoryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateHistoryMutation, CreateHistoryVariables>
        mutation={CreateHistoryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateHistoryProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateHistoryMutation, CreateHistoryVariables>
> &
  TChildProps;
export type CreateHistoryMutationFn = ReactApollo.MutationFn<
  CreateHistoryMutation,
  CreateHistoryVariables
>;
export function CreateHistoryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateHistoryMutation,
        CreateHistoryVariables,
        CreateHistoryProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CreateHistoryMutation,
    CreateHistoryVariables,
    CreateHistoryProps<TChildProps>
  >(CreateHistoryDocument, operationOptions);
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
export const DeletePostDocument = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
export class DeletePostComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeletePostMutation, DeletePostVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeletePostMutation, DeletePostVariables>
        mutation={DeletePostDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type DeletePostProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeletePostMutation, DeletePostVariables>
> &
  TChildProps;
export type DeletePostMutationFn = ReactApollo.MutationFn<
  DeletePostMutation,
  DeletePostVariables
>;
export function DeletePostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeletePostMutation,
        DeletePostVariables,
        DeletePostProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    DeletePostMutation,
    DeletePostVariables,
    DeletePostProps<TChildProps>
  >(DeletePostDocument, operationOptions);
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
