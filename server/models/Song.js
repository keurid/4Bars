const { Schema, model } = require('mongoose');

const songSchema = new Schema({
    idAlbum: {
        type: Number,
    },
    idArtist: {
        type: Number,
    },
    idTrack: {
        type: Number,
    },
    strAlbum: {
        type: String,
    },
    strArtist: {
        type: String,
    },
    strTrack: {
        type: String,
    },
    strTrackThumb: {
        type: String,
    }
});

const Song = model('Song', songSchema);

module.exports = Song;