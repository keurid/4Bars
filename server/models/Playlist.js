const { Schema, model } = require('mongoose');

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
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Song'
    }
  ]
});

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;
