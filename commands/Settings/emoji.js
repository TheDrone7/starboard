const { Command } = require('klasa');

module.exports = class extends Command {

  constructor(...args) {
    super(...args, {
      description: language => language.get('COMMAND_EMOJI_DESCRIPTION'),
      usage: '<star:emoji>',
      runIn: ['text'],
      permissionLevel: 6,
      promptLimit: 3
    });
  }

  async run(message, [star]) {
    await this.client.db.updateSettings(message.guild.id, 'emoji', star.name);
    return await message.send(message.language.get('COMMAND_EMOJI_SUCCESSFUL', star));
  }

};