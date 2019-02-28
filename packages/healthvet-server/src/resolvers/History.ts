import { HistoryResolvers } from '../generated/graphqlgen';

export const History: HistoryResolvers.Type = {
  ...HistoryResolvers.defaultResolvers,

  author: ({ id }, args, ctx) => {
    return ctx.prisma.history({ id }).author();
  },
  post: ({ id }, args, ctx) => {
    return ctx.prisma.history({ id }).post();
  },
};
