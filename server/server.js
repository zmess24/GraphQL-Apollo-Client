require('dotenv').config();

const 
	express = require('express'),
	app = express(),
	models = require('./models'),
	expressGraphQL = require('express-graphql'),
	mongoose = require('mongoose'),
	schema = require('./schema/schema'),
	{ MONGODB_URI } = process.env;

// Replace with your mongoLab URI
if (!MONGODB_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(express.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
