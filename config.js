const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1345116150358347826',
  status: {
    rotateDefault: [
      { name: 'Watching Through Tickets', type: ActivityType.Watching },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
}
