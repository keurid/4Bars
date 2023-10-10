const { Schema, model } = require('mongoose');

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  playlist_id: {
    type: String,
    required: true,
  },
  owner: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
});

const Playlist = model('Playlist', playlistSchema);

module.exports = Playlist;
