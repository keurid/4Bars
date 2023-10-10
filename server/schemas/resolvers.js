const { User, Playlist } = require('../models');
const { signToken } = require('../utils/auth');

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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(400).json({ message: 'No user found by that email'});
      }

      const correctPassword = await user.isCorrectPassword(body.password);

      if (!correctPassword) {
        return res.status(400).json({ message: 'Incorrect password'});
      }

      const token = signToken(user);
      return { token, user };
    },
    addPlaylist: async (parent, {playlist_id}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$addToSet: { playlist: playlist_id}},
          {new: true, runValidators: true}
        );
        return updatedUser;
      } else {
        return res.status(400).json({ message: 'Failed to save playlist'});
      }
    },
    removePlaylist: async (parent, {playlist_id}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$pull: { playlist: {playlist_id: playlist_id}}},
          {new: true}
        );
        return updatedUser;
      } else {
        return res.status(400).json({ message: 'Failed to delete playlist'});
      }
    },
  },
};

module.exports = resolvers;
