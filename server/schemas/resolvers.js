const { User, Playlist } = require('../models');

const resolvers = {
  Query: {
    User: async () => {
      return User.find({});
    },
    Playlist: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Playlist.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, {email, username, password}) => {
      const user = await User.create({email, username, password});

      const token = signToken(user);
      return {user, token};
    },
    
  },
};

module.exports = resolvers;
