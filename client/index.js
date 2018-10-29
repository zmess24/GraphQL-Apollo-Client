import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; // Library for interacting with GraphQL server on the backend, i.e making requests for data and storing locally.
import { InMemoryCache } from 'apollo-cache-inmemory'; //  normalized data store that supports all of Apollo Client 1.0’s features without the dependency on Redux.
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import Layout from './components/Layout';
import './style/style.css';

const cache = new InMemoryCache({
  dataIdFromObject: o => o.id
  // Use the id from each record to identify each piece of data and keep track of it.
  // Consequence: Whenever we make a query, we have to ask for the id back of every record.
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Route exact path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Layout>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(<Root />,document.querySelector('#root'));
