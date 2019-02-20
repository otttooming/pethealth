import React from 'react';
import RX from 'reactxp';
import { App } from './App';
import { DEBUG, DEV } from './config';
import { ApolloProvider } from 'react-apollo';
import client from './utils/withApollo';

RX.App.initialize(DEBUG, DEV);
RX.UserInterface.setMainView(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
