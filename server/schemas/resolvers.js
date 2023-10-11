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
    saveSong: async (parent, { newSong }, context) => {
      if (context.playlist) {
        const updatedPlaylist = await Playlist.findOneAndUpdate(
          {_id: context.playlist._id},
          {$push: { songs: newSong}},
          {new: true}
        );
        return updatedPlaylist;
      } else {
        return res.status(400).json({ message: 'No playlist found with this ID'});
      }
    },
    deleteSong: async (parent, {idTrack}, context) => {
      if (context.playlist) {
        const updatedPlaylist = await Playlist.findOneAndUpdate(
          {_id: context.playlist._id},
          {$pull: {songs: idTrack}},
          {new: true}
        );
        return updatedPlaylist;
      } else {
        return res.status(400).json({ message: 'No playlist found with this ID'});
      }
    },
  },
};

module.exports = resolvers;
