import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from '../../ui/App';

// Link client to server (fe/be)
const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
})

// create cache
const cache = new InMemoryCache();

// combine
const client = new ApolloClient({
  link: httpLink,
  cache
});

// Render app in Apollo
const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

// Render Apollo app
Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'));
});
