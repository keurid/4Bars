const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const User = require('./models/userModel');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    let user = null;
    try {
      if (token) {
        user = jwt.verify(token, JWT_SECRET);
      }
    } catch (error) {
      console.error('Error verifying JWT token:', error.message);
    }

    return { user };
  },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
});
