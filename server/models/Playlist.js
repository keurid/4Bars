const { Schema, model } = require('mongoose');

const Song = require('./Song');

const playlistSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  songs: [Song.schema],
});

const Playlist = model ("Playlist", playlistSchema)
module.exports = Playlist;