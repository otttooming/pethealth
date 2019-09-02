import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers';
import { permissions } from './permissions';
import { typeDefs } from './schema';

const server = new GraphQLServer({
  typeDefs,
  resolvers: resolvers as any,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});

const options = {
  endpoint: '/graphql',
  playground: '/graphql',
};

server.start(options, () =>
  console.log('Server is running on http://localhost:4000'),
);

export default server;
