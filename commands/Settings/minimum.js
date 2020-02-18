const { Command } = require('klasa');

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_MINIMUM_DESCRIPTION'),
      usage: '<number:number>',
      runIn: ['text'],
      permissionLevel: 6,
      promptLimit: 3
    });
  }

  async run(message, [n]) {
    await this.client.db.updateSettings(message.guild.id, 'minimum', n);
    return await message.send(message.language.get('COMMAND_MINIMUM_SUCCESSFUL', n));
  }

};