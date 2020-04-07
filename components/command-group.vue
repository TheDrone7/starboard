<template>
  <v-card>
    <v-card-title class="headline">{{title}}</v-card-title>
    <v-card-subtitle class="title font-weight-regular"><slot name="subtitle"/></v-card-subtitle>
    <v-card-text class="subtitle-1" :class="{'white--text': $vuetify.theme.dark, 'black--text': !$vuetify.theme.dark}">
      <slot name="content" />
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'command-group',
    props: {
      'title': String
    }
  }
</script>

<style scoped>

</style>
