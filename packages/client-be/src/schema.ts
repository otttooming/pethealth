export const typeDefs = /* GraphQL */ `
  scalar DateTime

  enum PostType {
    MEDICAL_RECORD
    FORUM_POST
  }

  type Query {
    me: User
    feed: [Post!]!
    filterPosts(searchString: String): [Post!]!
    post(id: ID!): Post
    listMessagesByPost(postId: ID!): [Message!]!
    listHistoriesByPost(postId: ID!): [History!]!
  }

  type Mutation {
    createDraft(title: String!, content: String, type: PostType): Post!
    deletePost(id: ID!): Post
    publish(id: ID!): Post
    signup(email: String!, password: String!, name: String): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createMessage(postId: ID!, content: String!): Message!
    createHistory(postId: ID!, title: String!, content: String!): History!
    createPatient(
      postId: ID!
      species: String
      breed: String
      sex: String
      dob: String
      weight: Float
    ): Patient
    deleteHistory(id: ID!): History!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Post {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    type: PostType!
    title: String!
    content: String
    author: User!
    patient: Patient
    histories: [History!]!
    messages: [Message!]!
  }

  type Patient {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    post: Post!
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  type History {
    id: ID!
    author: User!
    post: Post!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
  }

  type Message {
    id: ID!
    author: User!
    post: Post!
    createdAt: DateTime!
    updatedAt: DateTime!
    content: String
  }

  type User {
    id: ID!
    email: String!
    name: String
    posts: [Post!]!
  }
`;
