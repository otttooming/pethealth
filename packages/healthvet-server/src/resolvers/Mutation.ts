import { MutationResolvers } from '../generated/graphqlgen';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { APP_SECRET, getUserId } from '../utils';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10);
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid password');
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
  createDraft: async (parent, { title, content, type }, context) => {
    const userId = getUserId(context);
    return context.prisma.createPost({
      title,
      content,
      type,
      published: true,
      author: { connect: { id: userId } },
    });
  },
  deletePost: async (parent, { id }, context) => {
    return context.prisma.deletePost({ id });
  },
  publish: async (parent, { id }, context) => {
    return context.prisma.updatePost({
      where: { id },
      data: { published: true },
    });
  },
  createMessage: async (parent, { postId, content }, context) => {
    const userId = getUserId(context);
    return context.prisma.createMessage({
      content,
      post: { connect: { id: postId } },
      author: { connect: { id: userId } },
    });
  },
  createHistory: async (parent, { postId, title, content }, context) => {
    const userId = getUserId(context);
    return context.prisma.createHistory({
      title,
      content,
      post: { connect: { id: postId } },
      author: { connect: { id: userId } },
    });
  },
  createPatient: async (
    parent,
    { postId, weight, dob, sex, breed },
    context,
  ) => {
    return context.prisma.createPatient({
      weight,
      dob,
      sex,
      breed,
      post: { connect: { id: postId } },
    });
  },
  deleteHistory: async (parent, { id }, context) => {
    return context.prisma.deleteHistory({ id });
  },
};
