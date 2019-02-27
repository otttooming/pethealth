import { HistoryResolvers } from '../generated/graphqlgen';

export const History: HistoryResolvers.Type = {
  ...HistoryResolvers.defaultResolvers,

  author: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  post: ({ id }, args, ctx) => {
    return ctx.prisma.history({ id }).post();
  },
};
