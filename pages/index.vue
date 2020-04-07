<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Repl.it Starboard
        </v-card-title>
        <v-card-text :class="{'font-weight-light': $vuetify.theme.dark, 'subtitle-1': true}">
          <p>A Starboard discord bot made by <a href="https://repl.it/@TheDrone7">@TheDrone7</a> on repl.it for the 8th repl.it code jam.</p>
          <p>Some features of the bot are listed below: -</p>
          <v-list three-line>
            <div v-for="(item, index) in items">
              <v-list-item :key="index" @click="">
                <v-list-item-content>
                  <v-list-item-title v-html="item.title" />
                  <v-list-item-subtitle v-html="item.subtitle" />
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="index < (items.length -1)" />
            </div>
          </v-list>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="secondary"
            target="_blank"
            href="https://discordapp.com/oauth2/authorize?client_id=627530408115830807&permissions=75840&scope=bot"
            depressed
            tile
            large
          >
            INVITE NOW
          </v-btn>
          <v-spacer />
          <v-btn
            color="secondary"
            nuxt
            to="/commands"
            depressed
            tile
            large
          >
            Get Started
          </v-btn>
          <v-spacer />
          <v-btn
            color="secondary"
            nuxt
            to="/support"
            depressed
            tile
            large
          >
            Get Support
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          title: 'Fast',
          subtitle: 'Quick updates and fast responses.',
        },
        {
          title: 'Customizable',
          subtitle: 'Large number of options in settings',
        },
        {
          title: 'Safe',
          subtitle: 'Secure database transactions and permission checks.',
        },
        {
          title: 'Elegant',
          subtitle: 'Good looking and less space consuming functions.',
        },
        {
          title: 'Extras',
          subtitle: 'Server info, server specific leader-boards and more!',
        },
      ],
    }
  }
}
</script>
