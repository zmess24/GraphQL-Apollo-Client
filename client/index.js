import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; // Library for interacting with GraphQL server on the backend, i.e making requests for data and storing locally.
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  )
};

ReactDOM.render(<Root />,document.querySelector('#root'));
