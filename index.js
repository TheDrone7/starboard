require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.static('public'));

const { Client } = require('klasa');

Client.prototype.db = require('./db/db');

const config = new Object();
config.fetchAllMembers = true;
config.prefix = '*';
config.commandEditing = true;
config.commandLogging = true;
config.typing = true;
config.readyMessage = client => `Logged in as ${client.user.tag}`;
config.presence = {
  activity: {
    name: 'the STARBOARD',
    type: 'WATCHING'
  }
};
config.partials = ['REACTION', 'MESSAGE'];
config.createPiecesFolders = false;
config.ownerID = '417578954690527233';
config.disabledCorePieces = ['commands', 'languages'];

const bot = new Client(config);

bot.login(process.env.TOKEN).then(()=> {
  app.listen(3000, ()=> {
    bot.emit('log', 'Server ready.');
  });
});