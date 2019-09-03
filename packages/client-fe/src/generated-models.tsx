import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type History = {
  __typename?: 'History';
  id: Scalars['ID'];
  author: User;
  post: Post;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  author: User;
  post: Post;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Post;
  deletePost?: Maybe<Post>;
  publish?: Maybe<Post>;
  signup: AuthPayload;
  login: AuthPayload;
  createMessage: Message;
  createHistory: History;
  createPatient?: Maybe<Patient>;
  deleteHistory: History;
};

export type MutationCreateDraftArgs = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  type?: Maybe<PostType>;
};

export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};

export type MutationPublishArgs = {
  id: Scalars['ID'];
};

export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationCreateMessageArgs = {
  postId: Scalars['ID'];
  content: Scalars['String'];
};

export type MutationCreateHistoryArgs = {
  postId: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type MutationCreatePatientArgs = {
  postId: Scalars['ID'];
  species?: Maybe<Scalars['String']>;
  breed?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type MutationDeleteHistoryArgs = {
  id: Scalars['ID'];
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  post: Post;
  species?: Maybe<Scalars['String']>;
  breed?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  published: Scalars['Boolean'];
  type: PostType;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  author: User;
  patient?: Maybe<Patient>;
  histories: Array<History>;
  messages: Array<Message>;
};

export enum PostType {
  MedicalRecord = 'MEDICAL_RECORD',
  ForumPost = 'FORUM_POST',
}

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  feed: Array<Post>;
  filterPosts: Array<Post>;
  post?: Maybe<Post>;
  listMessagesByPost: Array<Message>;
  listHistoriesByPost: Array<History>;
};

export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>;
};

export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type QueryListMessagesByPostArgs = {
  postId: Scalars['ID'];
};

export type QueryListHistoriesByPostArgs = {
  postId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};
export type AuthLoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthLoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'>;
};

export type CreateDraftMutationVariables = {
  title: Scalars['String'];
  type?: Maybe<PostType>;
};

export type CreateDraftMutation = { __typename?: 'Mutation' } & {
  createDraft: { __typename?: 'Post' } & Pick<Post, 'id' | 'title'>;
};

export type CreateHistoryMutationVariables = {
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type CreateHistoryMutation = { __typename?: 'Mutation' } & {
  createHistory: { __typename?: 'History' } & Pick<History, 'id'>;
};

export type CreateMessageMutationVariables = {
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage: { __typename?: 'Message' } & Pick<Message, 'content'>;
};

export type CreatePatientMutationVariables = {
  id: Scalars['ID'];
  weight?: Maybe<Scalars['Float']>;
  sex?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  breed?: Maybe<Scalars['String']>;
};

export type CreatePatientMutation = { __typename?: 'Mutation' } & {
  createPatient: Maybe<{ __typename?: 'Patient' } & Pick<Patient, 'id'>>;
};

export type DashboardListQueryVariables = {};

export type DashboardListQuery = { __typename?: 'Query' } & {
  feed: Array<
    { __typename?: 'Post' } & Pick<Post, 'id' | 'content' | 'createdAt'> & {
        author: { __typename?: 'User' } & Pick<User, 'name'>;
      }
  >;
};

export type DeleteHistoryMutationVariables = {
  id: Scalars['ID'];
};

export type DeleteHistoryMutation = { __typename?: 'Mutation' } & {
  deleteHistory: { __typename?: 'History' } & Pick<History, 'id'>;
};

export type DeletePostMutationVariables = {
  id: Scalars['ID'];
};

export type DeletePostMutation = { __typename?: 'Mutation' } & {
  deletePost: Maybe<{ __typename?: 'Post' } & Pick<Post, 'id'>>;
};

export type GetDashboardListQueryVariables = {};

export type GetDashboardListQuery = { __typename?: 'Query' } & {
  feed: Array<
    { __typename?: 'Post' } & Pick<
      Post,
      'id' | 'title' | 'content' | 'createdAt'
    > & { author: { __typename?: 'User' } & Pick<User, 'name'> }
  >;
};

export type GetHistoriesByPostQueryVariables = {
  id: Scalars['ID'];
};

export type GetHistoriesByPostQuery = { __typename?: 'Query' } & {
  listHistoriesByPost: Array<
    { __typename?: 'History' } & Pick<
      History,
      'title' | 'content' | 'createdAt'
    > & { author: { __typename?: 'User' } & Pick<User, 'name'> }
  >;
};

export type GetMessagesByPostQueryVariables = {
  id: Scalars['ID'];
};

export type GetMessagesByPostQuery = { __typename?: 'Query' } & {
  listMessagesByPost: Array<
    { __typename?: 'Message' } & Pick<Message, 'content'> & {
        author: { __typename?: 'User' } & Pick<User, 'name'>;
      }
  >;
};

export type GetPostQueryVariables = {
  id: Scalars['ID'];
};

export type GetPostQuery = { __typename?: 'Query' } & {
  post: Maybe<
    { __typename?: 'Post' } & Pick<Post, 'id' | 'title'> & {
        histories: Array<
          { __typename?: 'History' } & Pick<
            History,
            'title' | 'content' | 'createdAt'
          >
        >;
        messages: Array<{ __typename?: 'Message' } & Pick<Message, 'content'>>;
      }
  >;
};

export const AuthLoginDocument = gql`
  mutation authLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export type AuthLoginMutationFn = ApolloReactCommon.MutationFunction<
  AuthLoginMutation,
  AuthLoginMutationVariables
>;
export type AuthLoginComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AuthLoginMutation,
    AuthLoginMutationVariables
  >,
  'mutation'
>;

export const AuthLoginComponent = (props: AuthLoginComponentProps) => (
  <ApolloReactComponents.Mutation<AuthLoginMutation, AuthLoginMutationVariables>
    mutation={AuthLoginDocument}
    {...props}
  />
);

export type AuthLoginProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  AuthLoginMutation,
  AuthLoginMutationVariables
> &
  TChildProps;
export function withAuthLogin<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AuthLoginMutation,
    AuthLoginMutationVariables,
    AuthLoginProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AuthLoginMutation,
    AuthLoginMutationVariables,
    AuthLoginProps<TChildProps>
  >(AuthLoginDocument, {
    alias: 'authLogin',
    ...operationOptions,
  });
}
export type AuthLoginMutationResult = ApolloReactCommon.MutationResult<
  AuthLoginMutation
>;
export type AuthLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AuthLoginMutation,
  AuthLoginMutationVariables
>;
export const CreateDraftDocument = gql`
  mutation createDraft($title: String!, $type: PostType) {
    createDraft(title: $title, type: $type) {
      id
      title
    }
  }
`;
export type CreateDraftMutationFn = ApolloReactCommon.MutationFunction<
  CreateDraftMutation,
  CreateDraftMutationVariables
>;
export type CreateDraftComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateDraftMutation,
    CreateDraftMutationVariables
  >,
  'mutation'
>;

export const CreateDraftComponent = (props: CreateDraftComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateDraftMutation,
    CreateDraftMutationVariables
  >
    mutation={CreateDraftDocument}
    {...props}
  />
);

export type CreateDraftProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateDraftMutation,
  CreateDraftMutationVariables
> &
  TChildProps;
export function withCreateDraft<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateDraftMutation,
    CreateDraftMutationVariables,
    CreateDraftProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateDraftMutation,
    CreateDraftMutationVariables,
    CreateDraftProps<TChildProps>
  >(CreateDraftDocument, {
    alias: 'createDraft',
    ...operationOptions,
  });
}
export type CreateDraftMutationResult = ApolloReactCommon.MutationResult<
  CreateDraftMutation
>;
export type CreateDraftMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateDraftMutation,
  CreateDraftMutationVariables
>;
export const CreateHistoryDocument = gql`
  mutation createHistory($id: ID!, $title: String!, $content: String!) {
    createHistory(postId: $id, title: $title, content: $content) {
      id
    }
  }
`;
export type CreateHistoryMutationFn = ApolloReactCommon.MutationFunction<
  CreateHistoryMutation,
  CreateHistoryMutationVariables
>;
export type CreateHistoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateHistoryMutation,
    CreateHistoryMutationVariables
  >,
  'mutation'
>;

export const CreateHistoryComponent = (props: CreateHistoryComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateHistoryMutation,
    CreateHistoryMutationVariables
  >
    mutation={CreateHistoryDocument}
    {...props}
  />
);

export type CreateHistoryProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateHistoryMutation,
  CreateHistoryMutationVariables
> &
  TChildProps;
export function withCreateHistory<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateHistoryMutation,
    CreateHistoryMutationVariables,
    CreateHistoryProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateHistoryMutation,
    CreateHistoryMutationVariables,
    CreateHistoryProps<TChildProps>
  >(CreateHistoryDocument, {
    alias: 'createHistory',
    ...operationOptions,
  });
}
export type CreateHistoryMutationResult = ApolloReactCommon.MutationResult<
  CreateHistoryMutation
>;
export type CreateHistoryMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateHistoryMutation,
  CreateHistoryMutationVariables
>;
export const CreateMessageDocument = gql`
  mutation createMessage($id: ID!, $content: String!) {
    createMessage(postId: $id, content: $content) {
      content
    }
  }
`;
export type CreateMessageMutationFn = ApolloReactCommon.MutationFunction<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export type CreateMessageComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >,
  'mutation'
>;

export const CreateMessageComponent = (props: CreateMessageComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >
    mutation={CreateMessageDocument}
    {...props}
  />
);

export type CreateMessageProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateMessageMutation,
  CreateMessageMutationVariables
> &
  TChildProps;
export function withCreateMessage<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateMessageMutation,
    CreateMessageMutationVariables,
    CreateMessageProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateMessageMutation,
    CreateMessageMutationVariables,
    CreateMessageProps<TChildProps>
  >(CreateMessageDocument, {
    alias: 'createMessage',
    ...operationOptions,
  });
}
export type CreateMessageMutationResult = ApolloReactCommon.MutationResult<
  CreateMessageMutation
>;
export type CreateMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export const CreatePatientDocument = gql`
  mutation createPatient(
    $id: ID!
    $weight: Float
    $sex: String
    $dob: String
    $species: String
    $breed: String
  ) {
    createPatient(
      postId: $id
      weight: $weight
      sex: $sex
      dob: $dob
      species: $species
      breed: $breed
    ) {
      id
    }
  }
`;
export type CreatePatientMutationFn = ApolloReactCommon.MutationFunction<
  CreatePatientMutation,
  CreatePatientMutationVariables
>;
export type CreatePatientComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreatePatientMutation,
    CreatePatientMutationVariables
  >,
  'mutation'
>;

export const CreatePatientComponent = (props: CreatePatientComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreatePatientMutation,
    CreatePatientMutationVariables
  >
    mutation={CreatePatientDocument}
    {...props}
  />
);

export type CreatePatientProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreatePatientMutation,
  CreatePatientMutationVariables
> &
  TChildProps;
export function withCreatePatient<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreatePatientMutation,
    CreatePatientMutationVariables,
    CreatePatientProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreatePatientMutation,
    CreatePatientMutationVariables,
    CreatePatientProps<TChildProps>
  >(CreatePatientDocument, {
    alias: 'createPatient',
    ...operationOptions,
  });
}
export type CreatePatientMutationResult = ApolloReactCommon.MutationResult<
  CreatePatientMutation
>;
export type CreatePatientMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePatientMutation,
  CreatePatientMutationVariables
>;
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
export type DashboardListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    DashboardListQuery,
    DashboardListQueryVariables
  >,
  'query'
>;

export const DashboardListComponent = (props: DashboardListComponentProps) => (
  <ApolloReactComponents.Query<DashboardListQuery, DashboardListQueryVariables>
    query={DashboardListDocument}
    {...props}
  />
);

export type DashboardListProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  DashboardListQuery,
  DashboardListQueryVariables
> &
  TChildProps;
export function withDashboardList<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DashboardListQuery,
    DashboardListQueryVariables,
    DashboardListProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    DashboardListQuery,
    DashboardListQueryVariables,
    DashboardListProps<TChildProps>
  >(DashboardListDocument, {
    alias: 'dashboardList',
    ...operationOptions,
  });
}
export type DashboardListQueryResult = ApolloReactCommon.QueryResult<
  DashboardListQuery,
  DashboardListQueryVariables
>;
export const DeleteHistoryDocument = gql`
  mutation deleteHistory($id: ID!) {
    deleteHistory(id: $id) {
      id
    }
  }
`;
export type DeleteHistoryMutationFn = ApolloReactCommon.MutationFunction<
  DeleteHistoryMutation,
  DeleteHistoryMutationVariables
>;
export type DeleteHistoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteHistoryMutation,
    DeleteHistoryMutationVariables
  >,
  'mutation'
>;

export const DeleteHistoryComponent = (props: DeleteHistoryComponentProps) => (
  <ApolloReactComponents.Mutation<
    DeleteHistoryMutation,
    DeleteHistoryMutationVariables
  >
    mutation={DeleteHistoryDocument}
    {...props}
  />
);

export type DeleteHistoryProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  DeleteHistoryMutation,
  DeleteHistoryMutationVariables
> &
  TChildProps;
export function withDeleteHistory<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteHistoryMutation,
    DeleteHistoryMutationVariables,
    DeleteHistoryProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteHistoryMutation,
    DeleteHistoryMutationVariables,
    DeleteHistoryProps<TChildProps>
  >(DeleteHistoryDocument, {
    alias: 'deleteHistory',
    ...operationOptions,
  });
}
export type DeleteHistoryMutationResult = ApolloReactCommon.MutationResult<
  DeleteHistoryMutation
>;
export type DeleteHistoryMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteHistoryMutation,
  DeleteHistoryMutationVariables
>;
export const DeletePostDocument = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
export type DeletePostMutationFn = ApolloReactCommon.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>;
export type DeletePostComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >,
  'mutation'
>;

export const DeletePostComponent = (props: DeletePostComponentProps) => (
  <ApolloReactComponents.Mutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >
    mutation={DeletePostDocument}
    {...props}
  />
);

export type DeletePostProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  DeletePostMutation,
  DeletePostMutationVariables
> &
  TChildProps;
export function withDeletePost<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeletePostMutation,
    DeletePostMutationVariables,
    DeletePostProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeletePostMutation,
    DeletePostMutationVariables,
    DeletePostProps<TChildProps>
  >(DeletePostDocument, {
    alias: 'deletePost',
    ...operationOptions,
  });
}
export type DeletePostMutationResult = ApolloReactCommon.MutationResult<
  DeletePostMutation
>;
export type DeletePostMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>;
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
export type GetDashboardListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetDashboardListQuery,
    GetDashboardListQueryVariables
  >,
  'query'
>;

export const GetDashboardListComponent = (
  props: GetDashboardListComponentProps,
) => (
  <ApolloReactComponents.Query<
    GetDashboardListQuery,
    GetDashboardListQueryVariables
  >
    query={GetDashboardListDocument}
    {...props}
  />
);

export type GetDashboardListProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetDashboardListQuery,
  GetDashboardListQueryVariables
> &
  TChildProps;
export function withGetDashboardList<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetDashboardListQuery,
    GetDashboardListQueryVariables,
    GetDashboardListProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetDashboardListQuery,
    GetDashboardListQueryVariables,
    GetDashboardListProps<TChildProps>
  >(GetDashboardListDocument, {
    alias: 'getDashboardList',
    ...operationOptions,
  });
}
export type GetDashboardListQueryResult = ApolloReactCommon.QueryResult<
  GetDashboardListQuery,
  GetDashboardListQueryVariables
>;
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
export type GetHistoriesByPostComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetHistoriesByPostQuery,
    GetHistoriesByPostQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetHistoriesByPostQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetHistoriesByPostComponent = (
  props: GetHistoriesByPostComponentProps,
) => (
  <ApolloReactComponents.Query<
    GetHistoriesByPostQuery,
    GetHistoriesByPostQueryVariables
  >
    query={GetHistoriesByPostDocument}
    {...props}
  />
);

export type GetHistoriesByPostProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetHistoriesByPostQuery,
  GetHistoriesByPostQueryVariables
> &
  TChildProps;
export function withGetHistoriesByPost<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetHistoriesByPostQuery,
    GetHistoriesByPostQueryVariables,
    GetHistoriesByPostProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetHistoriesByPostQuery,
    GetHistoriesByPostQueryVariables,
    GetHistoriesByPostProps<TChildProps>
  >(GetHistoriesByPostDocument, {
    alias: 'getHistoriesByPost',
    ...operationOptions,
  });
}
export type GetHistoriesByPostQueryResult = ApolloReactCommon.QueryResult<
  GetHistoriesByPostQuery,
  GetHistoriesByPostQueryVariables
>;
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
export type GetMessagesByPostComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetMessagesByPostQuery,
    GetMessagesByPostQueryVariables
  >,
  'query'
> &
  (
    | { variables: GetMessagesByPostQueryVariables; skip?: boolean }
    | { skip: boolean });

export const GetMessagesByPostComponent = (
  props: GetMessagesByPostComponentProps,
) => (
  <ApolloReactComponents.Query<
    GetMessagesByPostQuery,
    GetMessagesByPostQueryVariables
  >
    query={GetMessagesByPostDocument}
    {...props}
  />
);

export type GetMessagesByPostProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetMessagesByPostQuery,
  GetMessagesByPostQueryVariables
> &
  TChildProps;
export function withGetMessagesByPost<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetMessagesByPostQuery,
    GetMessagesByPostQueryVariables,
    GetMessagesByPostProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetMessagesByPostQuery,
    GetMessagesByPostQueryVariables,
    GetMessagesByPostProps<TChildProps>
  >(GetMessagesByPostDocument, {
    alias: 'getMessagesByPost',
    ...operationOptions,
  });
}
export type GetMessagesByPostQueryResult = ApolloReactCommon.QueryResult<
  GetMessagesByPostQuery,
  GetMessagesByPostQueryVariables
>;
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
export type GetPostComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetPostQuery,
    GetPostQueryVariables
  >,
  'query'
> &
  ({ variables: GetPostQueryVariables; skip?: boolean } | { skip: boolean });

export const GetPostComponent = (props: GetPostComponentProps) => (
  <ApolloReactComponents.Query<GetPostQuery, GetPostQueryVariables>
    query={GetPostDocument}
    {...props}
  />
);

export type GetPostProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetPostQuery,
  GetPostQueryVariables
> &
  TChildProps;
export function withGetPost<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetPostQuery,
    GetPostQueryVariables,
    GetPostProps<TChildProps>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetPostQuery,
    GetPostQueryVariables,
    GetPostProps<TChildProps>
  >(GetPostDocument, {
    alias: 'getPost',
    ...operationOptions,
  });
}
export type GetPostQueryResult = ApolloReactCommon.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>;
