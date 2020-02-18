const { Command } = require('klasa');

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_RESET_DESCRIPTION'),
      usage: '<minimum|emoji>',
      runIn: ['text'],
      permissionLevel: 6
    });
  }

  async run(message, [option]) {
    if (option === 'minimum' || option === 'min') {
      await this.client.db.updateSettings(message.guild.id, 'minimum', 4);
      return await message.send(message.language.get('COMMAND_RESET_SUCCESSFUL', 'minimum', 4));
    }
    else if (option === 'emoji' || option === 'star') {
      await this.client.db.updateSettings(message.guild.id, 'emoji', '⭐');
      return await message.send(message.language.get('COMMAND_RESET_SUCCESSFUL', 'emoji', '⭐'));
    }
  }
};