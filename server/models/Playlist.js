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

playlistSchema.post('save', function(error, doc, next) {
  if (error.name === 'ValidationError') {
    next(new Error('Validation error'));
  } else if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('Duplicate key error'));
  } else {
    next(error);
  }
});

module.exports = playlistSchema;
