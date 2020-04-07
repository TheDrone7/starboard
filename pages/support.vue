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
      <br />
      <div class="display-1" style="text-align: center">JOIN OUR SUPPORT SERVER</div><br />
      <iframe :src="'https://canary.discordapp.com/widget?id=436813926735413248&theme=' + ($vuetify.theme.dark ? 'dark' : 'light')" width="100%" height="480" allowtransparency="true" frameborder="0"></iframe>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {}
</script>
