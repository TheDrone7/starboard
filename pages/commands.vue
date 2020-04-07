<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm12 md8>
      <command-group title="Setup">
        <template v-slot:subtitle>The following commands can be used to set up the bot for usage in your server!</template>
        <template v-slot:content>
          Firstly, use the setup-command. The format for the command is: -<br/>
          <example>*setup &lt;channel&gt;</example> - Here, &lt;channel&gt; is supposed to be replace with the channel where the starred messages are to be sent.<br/><br/>
          For example: -<br/>
          <example>*setup #starboard</example> OR <example>*setup #announcements</example> OR <example>*setup 631556011467079681</example><br/><br/>
          The bot will be ready for usage. You can further use the settings commands to modify the behaviour of the starboard. The default settings are listed below.
          <ul>
            <li v-for="(item, index) of settings" :key="index">
              <span :class="{'white--text': $vuetify.theme.dark, 'black--text': !$vuetify.theme.dark}">{{item.setting.toUpperCase()}}</span> -
              <span :class="{'grey--text': true, 'text--lighten-1': $vuetify.theme.dark, 'text--darken-2': !$vuetify.theme.dark}">{{item.desc}}</span>
            </li>
          </ul>
        </template>
      </command-group>
      <br/>
      <v-divider />
      <br/>
      <command-group title="Settings">
        <template v-slot:subtitle>The following are the available settings can be used for modifying the bot's behaviour in your server</template>
        <template v-slot:content>
          <span class="title">Minimum requirement</span><br/>
          This defines how many people need to react to the message with a "STAR" (⭐ by default) for the message to be starred. By default this is set to 4 but can later be modified using the minimum command as explained below.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*minimum &lt;number&gt;</example>&#8195;OR&#8195;<example>*min &lt;number&gt;</example><br/>
          Here the &lt;number&gt; is to be replaced with a number of choice. It has to be greater than or equal to 2.<br/>
          This will set the minimum requirement to the number you replace &lt;number&gt; with.<br/><br/>
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*minimum 6</example> will set the minimum requirement to 6.<br/><br/><example>*min 3</example> will set the minimum requirement to 3.
          <br /><br /><v-divider /><br />
          <span class="title">Channel</span><br />
          This is the channel where the starred messages will be sent by the bot. The bot needs to have permissions to send, read, edit messages in the channel. The default value for this setting is provided while using the setup command and can be later modified using the channel command as explained below.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*channel &lt;channel&gt;</example>&#8195;OR&#8195;<example>*chan &lt;channel&gt;</example>&#8195;OR&#8195;<example>*board &lt;channel&gt;</example><br/>
          Here the &lt;channel&gt; is to be replaced with a channel of the server. It can either be a channel tag or a channel ID (only name won't work).<br/>
          This will set the starboard channel to the channel you replace &lt;channel&gt; with.<br/><br/>
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*channel #announcements</example> will set the channel to #announcements.<br/><br/><example>*board 631556011467079681</example> will set the starboard channel to the server's channel with ID 631556011467079681.
          <br /><br /><v-divider /><br />
          <span class="title">Emoji</span><br />
          This specifies the emoji that is considered as a "STAR" by the bot. The default value for this setting is ⭐(:star: on discord) and can be later modified using the emoji command as explained below.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*emoji &lt;emoji&gt;</example>&#8195;OR&#8195;<example>*star &lt;emoji&gt;</example><br/>
          Here the &lt;emoji&gt; is to be replaced with a custom emoji of the server.<br/>
          This will set the specified emoji as the "STAR" for the server.<br/><br/>
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*emoji :thonk:</example> will set the <a href="https://www.urbandictionary.com/define.php?term=thonk" target="_blank">thonk</a> emoji as the server's "STAR".
          <br /><br /><v-divider /><br />
          <span class="title">Reset</span><br />
          Sometimes you may want to reset the minimum amount of required stars to 4 or reset the "STAR" to the ⭐ emoji. For this purpose, you can use reset command as explained below.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*reset &lt;minimum|min|emoji|star&gt;</example><br/>
          Here the &lt;minimum|min|emoji|star&gt; is to be replaced with either of the 4.<br/>
          This will reset the specified setting.<br/><br/>
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*reset minimum</example> OR <example>*reset min</example> will reset the minimum requirement to 4.<br/><br/>
          <example>*reset emoji</example> OR <example>*reset star</example> will reset the "STAR" to ⭐.
          <br /><br /><v-divider /><br />
          <span class="title">Update</span><br />
          This command can be used to alter the amount of stars a user has. This command can only be used by the server owner as explained below.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*update &lt;user&gt; &lt;change&gt;</example><br/>
          Here, the first argument is the user whose stars are to be modified and the second argument is the change in stars. The change in stars can be a positive or a negative integer.<br/>
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*give @TheDrone7#1624 100</example> will give 100 stars to TheDrone7.<br/><br/>
          <example>*update @TheDrone7#1624 -100</example> will remove 100 stars from TheDrone7.
        </template>
      </command-group>
      <br /><v-divider /><br />
      <command-group title="Info">
        <template v-slot:subtitle>The following commands can be used to view certain set of information.</template>
        <template v-slot:content>
          <span class="title">Server info</span><br />
          This command can be used to view the server's current settings.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*serverinfo</example>&#8195;OR&#8195;<example>*si</example>&#8195;OR&#8195;<example>*gi</example>&#8195;OR&#8195;<example>*guildinfo</example>
          <br /><br /><v-divider /><br />
          <span class="title">User info</span><br />
          This command can be used to view a certain user's stats.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*userinfo [user]</example>&#8195;OR&#8195;<example>*ui [user]</example><br />
          Here [user] can either be omitted or replaced with a user mention.<br /><br />
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*userinfo</example> will show your own info.<br/><br/><example>*ui @TheDrone7#1624</example> will show TheDrone7's info.
          <br /><br /><v-divider /><br />
          <span class="title">Leader board</span><br />
          This command can be used to view the server specific leader board i.e. the list of users with the most stars in the server.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*leaderboard [page]</example>&#8195;OR&#8195;<example>*l [page]</example>&#8195;OR&#8195;<example>*leaders [page]</example><br />
          Here [page] can either be omitted or replaced with a number (page number of the leader board). Each leaderboard page contains 7 entries. The leaderboard is paginated so you don't need to use the command repeatedly if you wanna see different pages.<br /><br />
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*leaderboard</example> will show the top 7 users with the most stars (Page 1 of the leaderboard).<br/><br/><example>*leaders 2</example> will show 2nd page of the leaderboard.
        </template>
      </command-group>
      <br /><v-divider /><br />
      <command-group title="Utility">
        <template v-slot:subtitle>The following commands are there for certain utility functions.</template>
        <template v-slot:content>
          <span class="title">Ping</span><br />
          This command can be used to check the connectivity of the bot to the discord servers.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*ping</example>
          <br /><br /><v-divider /><br />
          <span class="title">Invite</span><br />
          This command can be used to get a link to invite the bot to your own server.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*invite</example>
          <br /><br /><v-divider /><br />
          <span class="title">Statistics</span><br />
          This command can be used to view the bot's statistics such as the number of servers.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*stats</example>
          <br /><br /><v-divider /><br />
          <span class="title">Help</span><br />
          This command can be used to get a list of the bot's commands or view details of a bot's commands inside discord.
          <br/><br/>
          <span style="font-size: 18px;">FORMAT : </span>&#8195;<example>*help [command]</example><br />
          You can omit [command] to get a list of commands or replace it with a command's name to view more details about it,<br /><br />
          <span style="font-size: 18px;">FOR EXAMPLE</span><br/><example>*help</example> will show the list of commands (It will be paginated if the bot has permissions to MANAGE MESSAGES and ADD REACTIONS. Otherwise, it will be a complete list in the DMs<br/><br/><example>*help stats</example> will show details about the stats command.
        </template>
      </command-group>
    </v-flex>
  </v-layout>
</template>

<script>
  import CommandGroup from '../components/command-group'
  import Example from '../components/example'
  export default {
    components: { Example, CommandGroup },
    data: () => {
      return {
        settings: [
          {
            setting: 'Minimum requirement',
            desc: 'This defines how many stars does a message require to be starred. The default value is 4.'
          },
          {
            setting: 'Channel',
            desc: 'This is the channel where the starred messages are sent by the bot. The default value is given during setup.'
          },
          {
            setting: 'Emoji',
            desc: 'This is the emoji that is to be considered a "STAR". This can either be the default ⭐ or one of the server\'s custom emoji.'
          },
        ]
      };
    }
  }
</script>
