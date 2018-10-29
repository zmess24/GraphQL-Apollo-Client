import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; // Library for interacting with GraphQL server on the backend, i.e making requests for data and storing locally.
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import Layout from './components/Layout';
import './style/style.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
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
