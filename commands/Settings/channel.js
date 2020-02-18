const { Command } = require('klasa');

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_CHANNEL_DESCRIPTION'),
      usage: '<channel:channel>',
      runIn: ['text'],
      permissionLevel: 6
    });
  }

  async run(message, [channel]) {
    await this.client.db.updateSettings(message.guild.id, 'channel', channel.id);
    return await message.send(message.language.get('COMMAND_CHANNEL_SUCCESSFUL', channel.id));
  }

};