import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const authLink = setContext(async (_, { headers }) => {
  const token = await localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uri =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000/graphql'
    : '/graphql';

const httpLink = createHttpLink({
  uri,
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
