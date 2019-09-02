// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MessageResolvers } from '../generated/graphqlgen';

export const Message: MessageResolvers.Type = {
  ...MessageResolvers.defaultResolvers,

  author: ({ id }, args, ctx) => {
    return ctx.prisma.message({ id }).author();
  },
  post: ({ id }, args, ctx) => {
    return ctx.prisma.message({ id }).post();
  },
};
