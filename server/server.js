const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const db = require('./config/connection');

const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();



const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

// Look for this console log to know if playground is discoverable
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// This starts the Apollo Server
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// will eventually turn off when converted
app.use(routes);

// this is be toggled off to get playground working
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`⏲️ Time circuits on localhost:${PORT}`));
});
