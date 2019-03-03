export const typeDefs = /* GraphQL */ `
  type AggregateHistory {
    count: Int!
  }

  type AggregateMessage {
    count: Int!
  }

  type AggregatePatient {
    count: Int!
  }

  type AggregatePost {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  scalar DateTime

  type History {
    id: ID!
    author: User!
    post: Post!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
  }

  type HistoryConnection {
    pageInfo: PageInfo!
    edges: [HistoryEdge]!
    aggregate: AggregateHistory!
  }

  input HistoryCreateInput {
    author: UserCreateOneInput!
    post: PostCreateOneWithoutHistoriesInput!
    title: String
    content: String
  }

  input HistoryCreateManyWithoutPostInput {
    create: [HistoryCreateWithoutPostInput!]
    connect: [HistoryWhereUniqueInput!]
  }

  input HistoryCreateWithoutPostInput {
    author: UserCreateOneInput!
    title: String
    content: String
  }

  type HistoryEdge {
    node: History!
    cursor: String!
  }

  enum HistoryOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
    title_ASC
    title_DESC
    content_ASC
    content_DESC
  }

  type HistoryPreviousValues {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
  }

  input HistoryScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    AND: [HistoryScalarWhereInput!]
    OR: [HistoryScalarWhereInput!]
    NOT: [HistoryScalarWhereInput!]
  }

  type HistorySubscriptionPayload {
    mutation: MutationType!
    node: History
    updatedFields: [String!]
    previousValues: HistoryPreviousValues
  }

  input HistorySubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: HistoryWhereInput
    AND: [HistorySubscriptionWhereInput!]
    OR: [HistorySubscriptionWhereInput!]
    NOT: [HistorySubscriptionWhereInput!]
  }

  input HistoryUpdateInput {
    author: UserUpdateOneRequiredInput
    post: PostUpdateOneRequiredWithoutHistoriesInput
    title: String
    content: String
  }

  input HistoryUpdateManyDataInput {
    title: String
    content: String
  }

  input HistoryUpdateManyMutationInput {
    title: String
    content: String
  }

  input HistoryUpdateManyWithoutPostInput {
    create: [HistoryCreateWithoutPostInput!]
    delete: [HistoryWhereUniqueInput!]
    connect: [HistoryWhereUniqueInput!]
    set: [HistoryWhereUniqueInput!]
    disconnect: [HistoryWhereUniqueInput!]
    update: [HistoryUpdateWithWhereUniqueWithoutPostInput!]
    upsert: [HistoryUpsertWithWhereUniqueWithoutPostInput!]
    deleteMany: [HistoryScalarWhereInput!]
    updateMany: [HistoryUpdateManyWithWhereNestedInput!]
  }

  input HistoryUpdateManyWithWhereNestedInput {
    where: HistoryScalarWhereInput!
    data: HistoryUpdateManyDataInput!
  }

  input HistoryUpdateWithoutPostDataInput {
    author: UserUpdateOneRequiredInput
    title: String
    content: String
  }

  input HistoryUpdateWithWhereUniqueWithoutPostInput {
    where: HistoryWhereUniqueInput!
    data: HistoryUpdateWithoutPostDataInput!
  }

  input HistoryUpsertWithWhereUniqueWithoutPostInput {
    where: HistoryWhereUniqueInput!
    update: HistoryUpdateWithoutPostDataInput!
    create: HistoryCreateWithoutPostInput!
  }

  input HistoryWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    author: UserWhereInput
    post: PostWhereInput
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    AND: [HistoryWhereInput!]
    OR: [HistoryWhereInput!]
    NOT: [HistoryWhereInput!]
  }

  input HistoryWhereUniqueInput {
    id: ID
  }

  scalar Long

  type Message {
    id: ID!
    author: User!
    post: Post!
    createdAt: DateTime!
    updatedAt: DateTime!
    content: String
  }

  type MessageConnection {
    pageInfo: PageInfo!
    edges: [MessageEdge]!
    aggregate: AggregateMessage!
  }

  input MessageCreateInput {
    author: UserCreateOneInput!
    post: PostCreateOneWithoutMessagesInput!
    content: String
  }

  input MessageCreateManyWithoutPostInput {
    create: [MessageCreateWithoutPostInput!]
    connect: [MessageWhereUniqueInput!]
  }

  input MessageCreateWithoutPostInput {
    author: UserCreateOneInput!
    content: String
  }

  type MessageEdge {
    node: Message!
    cursor: String!
  }

  enum MessageOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
    content_ASC
    content_DESC
  }

  type MessagePreviousValues {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    content: String
  }

  input MessageScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    AND: [MessageScalarWhereInput!]
    OR: [MessageScalarWhereInput!]
    NOT: [MessageScalarWhereInput!]
  }

  type MessageSubscriptionPayload {
    mutation: MutationType!
    node: Message
    updatedFields: [String!]
    previousValues: MessagePreviousValues
  }

  input MessageSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: MessageWhereInput
    AND: [MessageSubscriptionWhereInput!]
    OR: [MessageSubscriptionWhereInput!]
    NOT: [MessageSubscriptionWhereInput!]
  }

  input MessageUpdateInput {
    author: UserUpdateOneRequiredInput
    post: PostUpdateOneRequiredWithoutMessagesInput
    content: String
  }

  input MessageUpdateManyDataInput {
    content: String
  }

  input MessageUpdateManyMutationInput {
    content: String
  }

  input MessageUpdateManyWithoutPostInput {
    create: [MessageCreateWithoutPostInput!]
    delete: [MessageWhereUniqueInput!]
    connect: [MessageWhereUniqueInput!]
    set: [MessageWhereUniqueInput!]
    disconnect: [MessageWhereUniqueInput!]
    update: [MessageUpdateWithWhereUniqueWithoutPostInput!]
    upsert: [MessageUpsertWithWhereUniqueWithoutPostInput!]
    deleteMany: [MessageScalarWhereInput!]
    updateMany: [MessageUpdateManyWithWhereNestedInput!]
  }

  input MessageUpdateManyWithWhereNestedInput {
    where: MessageScalarWhereInput!
    data: MessageUpdateManyDataInput!
  }

  input MessageUpdateWithoutPostDataInput {
    author: UserUpdateOneRequiredInput
    content: String
  }

  input MessageUpdateWithWhereUniqueWithoutPostInput {
    where: MessageWhereUniqueInput!
    data: MessageUpdateWithoutPostDataInput!
  }

  input MessageUpsertWithWhereUniqueWithoutPostInput {
    where: MessageWhereUniqueInput!
    update: MessageUpdateWithoutPostDataInput!
    create: MessageCreateWithoutPostInput!
  }

  input MessageWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    author: UserWhereInput
    post: PostWhereInput
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    AND: [MessageWhereInput!]
    OR: [MessageWhereInput!]
    NOT: [MessageWhereInput!]
  }

  input MessageWhereUniqueInput {
    id: ID
  }

  type Mutation {
    createHistory(data: HistoryCreateInput!): History!
    updateHistory(
      data: HistoryUpdateInput!
      where: HistoryWhereUniqueInput!
    ): History
    updateManyHistories(
      data: HistoryUpdateManyMutationInput!
      where: HistoryWhereInput
    ): BatchPayload!
    upsertHistory(
      where: HistoryWhereUniqueInput!
      create: HistoryCreateInput!
      update: HistoryUpdateInput!
    ): History!
    deleteHistory(where: HistoryWhereUniqueInput!): History
    deleteManyHistories(where: HistoryWhereInput): BatchPayload!
    createMessage(data: MessageCreateInput!): Message!
    updateMessage(
      data: MessageUpdateInput!
      where: MessageWhereUniqueInput!
    ): Message
    updateManyMessages(
      data: MessageUpdateManyMutationInput!
      where: MessageWhereInput
    ): BatchPayload!
    upsertMessage(
      where: MessageWhereUniqueInput!
      create: MessageCreateInput!
      update: MessageUpdateInput!
    ): Message!
    deleteMessage(where: MessageWhereUniqueInput!): Message
    deleteManyMessages(where: MessageWhereInput): BatchPayload!
    createPatient(data: PatientCreateInput!): Patient!
    updatePatient(
      data: PatientUpdateInput!
      where: PatientWhereUniqueInput!
    ): Patient
    updateManyPatients(
      data: PatientUpdateManyMutationInput!
      where: PatientWhereInput
    ): BatchPayload!
    upsertPatient(
      where: PatientWhereUniqueInput!
      create: PatientCreateInput!
      update: PatientUpdateInput!
    ): Patient!
    deletePatient(where: PatientWhereUniqueInput!): Patient
    deleteManyPatients(where: PatientWhereInput): BatchPayload!
    createPost(data: PostCreateInput!): Post!
    updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
    updateManyPosts(
      data: PostUpdateManyMutationInput!
      where: PostWhereInput
    ): BatchPayload!
    upsertPost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post!
    deletePost(where: PostWhereUniqueInput!): Post
    deleteManyPosts(where: PostWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload!
    upsertUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
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

  type PatientConnection {
    pageInfo: PageInfo!
    edges: [PatientEdge]!
    aggregate: AggregatePatient!
  }

  input PatientCreateInput {
    post: PostCreateOneWithoutPatientInput!
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  input PatientCreateOneWithoutPostInput {
    create: PatientCreateWithoutPostInput
    connect: PatientWhereUniqueInput
  }

  input PatientCreateWithoutPostInput {
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  type PatientEdge {
    node: Patient!
    cursor: String!
  }

  enum PatientOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
    species_ASC
    species_DESC
    breed_ASC
    breed_DESC
    sex_ASC
    sex_DESC
    dob_ASC
    dob_DESC
    weight_ASC
    weight_DESC
  }

  type PatientPreviousValues {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  type PatientSubscriptionPayload {
    mutation: MutationType!
    node: Patient
    updatedFields: [String!]
    previousValues: PatientPreviousValues
  }

  input PatientSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: PatientWhereInput
    AND: [PatientSubscriptionWhereInput!]
    OR: [PatientSubscriptionWhereInput!]
    NOT: [PatientSubscriptionWhereInput!]
  }

  input PatientUpdateInput {
    post: PostUpdateOneRequiredWithoutPatientInput
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  input PatientUpdateManyMutationInput {
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  input PatientUpdateOneWithoutPostInput {
    create: PatientCreateWithoutPostInput
    update: PatientUpdateWithoutPostDataInput
    upsert: PatientUpsertWithoutPostInput
    delete: Boolean
    disconnect: Boolean
    connect: PatientWhereUniqueInput
  }

  input PatientUpdateWithoutPostDataInput {
    species: String
    breed: String
    sex: String
    dob: String
    weight: Float
  }

  input PatientUpsertWithoutPostInput {
    update: PatientUpdateWithoutPostDataInput!
    create: PatientCreateWithoutPostInput!
  }

  input PatientWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    post: PostWhereInput
    species: String
    species_not: String
    species_in: [String!]
    species_not_in: [String!]
    species_lt: String
    species_lte: String
    species_gt: String
    species_gte: String
    species_contains: String
    species_not_contains: String
    species_starts_with: String
    species_not_starts_with: String
    species_ends_with: String
    species_not_ends_with: String
    breed: String
    breed_not: String
    breed_in: [String!]
    breed_not_in: [String!]
    breed_lt: String
    breed_lte: String
    breed_gt: String
    breed_gte: String
    breed_contains: String
    breed_not_contains: String
    breed_starts_with: String
    breed_not_starts_with: String
    breed_ends_with: String
    breed_not_ends_with: String
    sex: String
    sex_not: String
    sex_in: [String!]
    sex_not_in: [String!]
    sex_lt: String
    sex_lte: String
    sex_gt: String
    sex_gte: String
    sex_contains: String
    sex_not_contains: String
    sex_starts_with: String
    sex_not_starts_with: String
    sex_ends_with: String
    sex_not_ends_with: String
    dob: String
    dob_not: String
    dob_in: [String!]
    dob_not_in: [String!]
    dob_lt: String
    dob_lte: String
    dob_gt: String
    dob_gte: String
    dob_contains: String
    dob_not_contains: String
    dob_starts_with: String
    dob_not_starts_with: String
    dob_ends_with: String
    dob_not_ends_with: String
    weight: Float
    weight_not: Float
    weight_in: [Float!]
    weight_not_in: [Float!]
    weight_lt: Float
    weight_lte: Float
    weight_gt: Float
    weight_gte: Float
    AND: [PatientWhereInput!]
    OR: [PatientWhereInput!]
    NOT: [PatientWhereInput!]
  }

  input PatientWhereUniqueInput {
    id: ID
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
    histories(
      where: HistoryWhereInput
      orderBy: HistoryOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [History!]
    messages(
      where: MessageWhereInput
      orderBy: MessageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Message!]
  }

  type PostConnection {
    pageInfo: PageInfo!
    edges: [PostEdge]!
    aggregate: AggregatePost!
  }

  input PostCreateInput {
    published: Boolean
    type: PostType
    title: String!
    content: String
    author: UserCreateOneWithoutPostsInput!
    patient: PatientCreateOneWithoutPostInput
    histories: HistoryCreateManyWithoutPostInput
    messages: MessageCreateManyWithoutPostInput
  }

  input PostCreateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
  }

  input PostCreateOneWithoutHistoriesInput {
    create: PostCreateWithoutHistoriesInput
    connect: PostWhereUniqueInput
  }

  input PostCreateOneWithoutMessagesInput {
    create: PostCreateWithoutMessagesInput
    connect: PostWhereUniqueInput
  }

  input PostCreateOneWithoutPatientInput {
    create: PostCreateWithoutPatientInput
    connect: PostWhereUniqueInput
  }

  input PostCreateWithoutAuthorInput {
    published: Boolean
    type: PostType
    title: String!
    content: String
    patient: PatientCreateOneWithoutPostInput
    histories: HistoryCreateManyWithoutPostInput
    messages: MessageCreateManyWithoutPostInput
  }

  input PostCreateWithoutHistoriesInput {
    published: Boolean
    type: PostType
    title: String!
    content: String
    author: UserCreateOneWithoutPostsInput!
    patient: PatientCreateOneWithoutPostInput
    messages: MessageCreateManyWithoutPostInput
  }

  input PostCreateWithoutMessagesInput {
    published: Boolean
    type: PostType
    title: String!
    content: String
    author: UserCreateOneWithoutPostsInput!
    patient: PatientCreateOneWithoutPostInput
    histories: HistoryCreateManyWithoutPostInput
  }

  input PostCreateWithoutPatientInput {
    published: Boolean
    type: PostType
    title: String!
    content: String
    author: UserCreateOneWithoutPostsInput!
    histories: HistoryCreateManyWithoutPostInput
    messages: MessageCreateManyWithoutPostInput
  }

  type PostEdge {
    node: Post!
    cursor: String!
  }

  enum PostOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
    published_ASC
    published_DESC
    type_ASC
    type_DESC
    title_ASC
    title_DESC
    content_ASC
    content_DESC
  }

  type PostPreviousValues {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    type: PostType!
    title: String!
    content: String
  }

  input PostScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    published: Boolean
    published_not: Boolean
    type: PostType
    type_not: PostType
    type_in: [PostType!]
    type_not_in: [PostType!]
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    node: Post
    updatedFields: [String!]
    previousValues: PostPreviousValues
  }

  input PostSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: PostWhereInput
    AND: [PostSubscriptionWhereInput!]
    OR: [PostSubscriptionWhereInput!]
    NOT: [PostSubscriptionWhereInput!]
  }

  enum PostType {
    MEDICAL_RECORD
    FORUM_POST
  }

  input PostUpdateInput {
    published: Boolean
    type: PostType
    title: String
    content: String
    author: UserUpdateOneRequiredWithoutPostsInput
    patient: PatientUpdateOneWithoutPostInput
    histories: HistoryUpdateManyWithoutPostInput
    messages: MessageUpdateManyWithoutPostInput
  }

  input PostUpdateManyDataInput {
    published: Boolean
    type: PostType
    title: String
    content: String
  }

  input PostUpdateManyMutationInput {
    published: Boolean
    type: PostType
    title: String
    content: String
  }

  input PostUpdateManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
    updateMany: [PostUpdateManyWithWhereNestedInput!]
  }

  input PostUpdateManyWithWhereNestedInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyDataInput!
  }

  input PostUpdateOneRequiredWithoutHistoriesInput {
    create: PostCreateWithoutHistoriesInput
    update: PostUpdateWithoutHistoriesDataInput
    upsert: PostUpsertWithoutHistoriesInput
    connect: PostWhereUniqueInput
  }

  input PostUpdateOneRequiredWithoutMessagesInput {
    create: PostCreateWithoutMessagesInput
    update: PostUpdateWithoutMessagesDataInput
    upsert: PostUpsertWithoutMessagesInput
    connect: PostWhereUniqueInput
  }

  input PostUpdateOneRequiredWithoutPatientInput {
    create: PostCreateWithoutPatientInput
    update: PostUpdateWithoutPatientDataInput
    upsert: PostUpsertWithoutPatientInput
    connect: PostWhereUniqueInput
  }

  input PostUpdateWithoutAuthorDataInput {
    published: Boolean
    type: PostType
    title: String
    content: String
    patient: PatientUpdateOneWithoutPostInput
    histories: HistoryUpdateManyWithoutPostInput
    messages: MessageUpdateManyWithoutPostInput
  }

  input PostUpdateWithoutHistoriesDataInput {
    published: Boolean
    type: PostType
    title: String
    content: String
    author: UserUpdateOneRequiredWithoutPostsInput
    patient: PatientUpdateOneWithoutPostInput
    messages: MessageUpdateManyWithoutPostInput
  }

  input PostUpdateWithoutMessagesDataInput {
    published: Boolean
    type: PostType
    title: String
    content: String
    author: UserUpdateOneRequiredWithoutPostsInput
    patient: PatientUpdateOneWithoutPostInput
    histories: HistoryUpdateManyWithoutPostInput
  }

  input PostUpdateWithoutPatientDataInput {
    published: Boolean
    type: PostType
    title: String
    content: String
    author: UserUpdateOneRequiredWithoutPostsInput
    histories: HistoryUpdateManyWithoutPostInput
    messages: MessageUpdateManyWithoutPostInput
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutAuthorDataInput!
  }

  input PostUpsertWithoutHistoriesInput {
    update: PostUpdateWithoutHistoriesDataInput!
    create: PostCreateWithoutHistoriesInput!
  }

  input PostUpsertWithoutMessagesInput {
    update: PostUpdateWithoutMessagesDataInput!
    create: PostCreateWithoutMessagesInput!
  }

  input PostUpsertWithoutPatientInput {
    update: PostUpdateWithoutPatientDataInput!
    create: PostCreateWithoutPatientInput!
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutAuthorDataInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    published: Boolean
    published_not: Boolean
    type: PostType
    type_not: PostType
    type_in: [PostType!]
    type_not_in: [PostType!]
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    content: String
    content_not: String
    content_in: [String!]
    content_not_in: [String!]
    content_lt: String
    content_lte: String
    content_gt: String
    content_gte: String
    content_contains: String
    content_not_contains: String
    content_starts_with: String
    content_not_starts_with: String
    content_ends_with: String
    content_not_ends_with: String
    author: UserWhereInput
    patient: PatientWhereInput
    histories_every: HistoryWhereInput
    histories_some: HistoryWhereInput
    histories_none: HistoryWhereInput
    messages_every: MessageWhereInput
    messages_some: MessageWhereInput
    messages_none: MessageWhereInput
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
  }

  input PostWhereUniqueInput {
    id: ID
  }

  type Query {
    history(where: HistoryWhereUniqueInput!): History
    histories(
      where: HistoryWhereInput
      orderBy: HistoryOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [History]!
    historiesConnection(
      where: HistoryWhereInput
      orderBy: HistoryOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): HistoryConnection!
    message(where: MessageWhereUniqueInput!): Message
    messages(
      where: MessageWhereInput
      orderBy: MessageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Message]!
    messagesConnection(
      where: MessageWhereInput
      orderBy: MessageOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): MessageConnection!
    patient(where: PatientWhereUniqueInput!): Patient
    patients(
      where: PatientWhereInput
      orderBy: PatientOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Patient]!
    patientsConnection(
      where: PatientWhereInput
      orderBy: PatientOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PatientConnection!
    post(where: PostWhereUniqueInput!): Post
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post]!
    postsConnection(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): PostConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    usersConnection(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    node(id: ID!): Node
  }

  type Subscription {
    history(where: HistorySubscriptionWhereInput): HistorySubscriptionPayload
    message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
    patient(where: PatientSubscriptionWhereInput): PatientSubscriptionPayload
    post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }

  type User {
    id: ID!
    email: String!
    password: String!
    name: String
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Post!]
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  input UserCreateInput {
    email: String!
    password: String!
    name: String
    posts: PostCreateManyWithoutAuthorInput
  }

  input UserCreateOneInput {
    create: UserCreateInput
    connect: UserWhereUniqueInput
  }

  input UserCreateOneWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserCreateWithoutPostsInput {
    email: String!
    password: String!
    name: String
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    email_ASC
    email_DESC
    password_ASC
    password_DESC
    name_ASC
    name_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type UserPreviousValues {
    id: ID!
    email: String!
    password: String!
    name: String
  }

  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }

  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }

  input UserUpdateDataInput {
    email: String
    password: String
    name: String
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateInput {
    email: String
    password: String
    name: String
    posts: PostUpdateManyWithoutAuthorInput
  }

  input UserUpdateManyMutationInput {
    email: String
    password: String
    name: String
  }

  input UserUpdateOneRequiredInput {
    create: UserCreateInput
    update: UserUpdateDataInput
    upsert: UserUpsertNestedInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneRequiredWithoutPostsInput {
    create: UserCreateWithoutPostsInput
    update: UserUpdateWithoutPostsDataInput
    upsert: UserUpsertWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateWithoutPostsDataInput {
    email: String
    password: String
    name: String
  }

  input UserUpsertNestedInput {
    update: UserUpdateDataInput!
    create: UserCreateInput!
  }

  input UserUpsertWithoutPostsInput {
    update: UserUpdateWithoutPostsDataInput!
    create: UserCreateWithoutPostsInput!
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    password: String
    password_not: String
    password_in: [String!]
    password_not_in: [String!]
    password_lt: String
    password_lte: String
    password_gt: String
    password_gte: String
    password_contains: String
    password_not_contains: String
    password_starts_with: String
    password_not_starts_with: String
    password_ends_with: String
    password_not_ends_with: String
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    posts_every: PostWhereInput
    posts_some: PostWhereInput
    posts_none: PostWhereInput
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserWhereUniqueInput {
    id: ID
    email: String
  }
`;
