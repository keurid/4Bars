const { Schema, model } = require('mongoose');

const songSchema = new Schema({
    idAlbum: {
        type: Number,
    },
    idArtist: {
        type: Number,
        required: true,
    },
    idTrack: {
        type: Number,
        required: true,
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

module.exports = songSchema;