import { Resolvers } from '../generated/graphqlgen';

import { Query } from './Query';
import { User } from './User';
import { Post } from './Post';
import { History } from './History';
import { Message } from './Message';
import { Mutation } from './Mutation';
import { Patient } from './Patient';
import { AuthPayload } from './AuthPayload';

export const resolvers: Resolvers = {
  Query,
  User,
  Post,
  Mutation,
  AuthPayload,
  History,
  Message,
  Patient,
};
