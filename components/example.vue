<template>
  <v-chip label :class="{'font-weight-medium': !$vuetify.theme.dark}"><slot /></v-chip>
</template>

<script>
  export default {
    name: 'example'
  }
</script>
