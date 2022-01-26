const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
// const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  // await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// will eventually turn off when converted
// app.use(routes);

console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

// this is be toggled off to get playground working
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`⏲️ Time circuits on localhost:${PORT}`));
});
