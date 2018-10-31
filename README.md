# Lyrical-GraphQL

## Introduction:

This tutorial was taken from Stephen Grider's [GraphQL with React: The Complete Developers Guide](https://www.udemy.com/graphql-with-react-course/).

This application's purpose was to learn how to interface with a GraphQl server via an apollo client in order to make successful queries (GET) and mutations (CREATE, UPDATE, DELETE).

## Note:

As Stephen's tutorial was created two years ago and leveraged an older version of React, I updated the dependecies in order to make use of current React API and ES7 features that weren't part of standard boilerplate.

## Setup

To test this technology locally...

1. Run `git clone https://github.com/zmess24/GraphQL-Apollo-Client.git` to clone the repo.
2. Navigate into the directory.
3. Run npm install to install the necessary dependencies.
4. Go to [mlab.com](mlab.com) and create a sandbox account to host a remote Mongo DB.
5. Create a `.env` and assign your mlab database URL to a variable called `MONGODB_URI`
6. Run `npm run dev` to boot up the server. If your mlab instance is connected correctly, you should see `Connected to MongoLab instance.`
7. Navigate to http://localhost:4000/ to start experimenting with queries.