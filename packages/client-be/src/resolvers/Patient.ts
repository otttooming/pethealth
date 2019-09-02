import { MutationResolvers, PatientResolvers } from '../generated/graphqlgen';

export const Patient: PatientResolvers.Type = {
  ...PatientResolvers.defaultResolvers,

  post: ({ id }, args, ctx) => {
    return ctx.prisma.patient({ id }).post();
  },
};
