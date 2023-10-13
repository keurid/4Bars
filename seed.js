const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User, Playlist, Song } = require('../models');

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Playlist.deleteMany({});
    await Song.deleteMany({});

    // Create users
    const user1 = await User.create({
      email: 'user1@example.com',
      username: 'user1',
      name: 'User One',
      password: await bcrypt.hash('password123', 10),
    });

    const user2 = await User.create({
      email: 'user2@example.com',
      username: 'user2',
      name: 'User Two',
      password: await bcrypt.hash('password456', 10),
    });

    // Create playlists
    const playlist1 = await Playlist.create({
      name: 'Playlist 1',
      description: 'Description for Playlist 1',
    });

    const playlist2 = await Playlist.create({
      name: 'Playlist 2',
      description: 'Description for Playlist 2',
    });

    // Create songs
    const song1 = await Song.create({
      idArtist: 1,
      idTrack: 101,
      strArtist: 'Artist 1',
      strTrack: 'Track 1',
    });

    const song2 = await Song.create({
      idArtist: 2,
      idTrack: 201,
      strArtist: 'Artist 2',
      strTrack: 'Track 2',
    });

    // Add songs to playlists
    playlist1.songs.push(song1);
    playlist2.songs.push(song2);

    // Add playlists to users
    user1.Playlist.push(playlist1);
    user2.Playlist.push(playlist2);

    // Save changes
    await playlist1.save();
    await playlist2.save();
    await user1.save();
    await user2.save();

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    // Close the connection after seeding
    mongoose.connection.close();
  }
};

seedData();
