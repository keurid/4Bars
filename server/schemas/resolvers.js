const { User, Playlist, Song } = require('../models');
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
    createUser: async (parent, { email, username, password }) => {
      const user = await User.create({ email, username, password });
      const token = signToken(user);
      console.log(user)
      console.log(token)

      return { user, token };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error('No user found by that username');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new Error('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },
    createPlaylist: async (parent, args, context) => {
      const newPlaylist = new Playlist(args)
      await newPlaylist.save()
      if (context.user) {
        await User.findByIdAndUpdate(
          context.user._id,
          { $push: { playlist: newPlaylist } }
        );
        return newPlaylist;
      } else {
        throw new Error('No user found in the context');
      }
    },
    deletePlaylist: async (parent, { playlist_id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { playlist: { playlist_id } } },
          { new: true }
        );
    
        if (!updatedUser) {
          throw new Error('User not found');
        }
    
        return updatedUser;
      } else {
        throw new Error('No user found in the context');
      }
    },
    saveSong: async (parent, { newSong }, context) => {
      if (context.Playlist) {
        const updatedPlaylist = await Playlist.findOneAndUpdate(
          { _id: context.Playlist._id },
          { $push: { songs: newSong } },
          { new: true }
        );
        return updatedPlaylist;
      } else {
        throw new Error('No playlist found in the context');
      }
    },
    deleteSong: async (parent, { idTrack }, context) => {
      if (context.Playlist) {
        const updatedPlaylist = await Playlist.findOneAndUpdate(
          { _id: context.Playlist._id },
          { $pull: { songs: idTrack } },
          { new: true }
        );
        return updatedPlaylist;
      } else {
        throw new Error('No playlist found in the context');
      }
    },
  },
};

module.exports = resolvers;
