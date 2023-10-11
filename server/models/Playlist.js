const { Schema, model } = require('mongoose');

const songSchema = require('./Song');

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  songs: [songSchema],
});

module.exports = playlistSchema;
