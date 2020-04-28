<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'" color="blue">
      <q-toolbar>

        <q-btn
          v-if="$route.fullPath.includes()"
          v-go-back.single
          icon="arrow_back"
          flat
          dense
          color="primary"
        />

        <q-toolbar-title
          class="absolute-center"
          style="color: #2196f3">
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  computed: {
    title () {
      console.log(this.$route)
      const currentPath = this.$route.fullPath
      if (currentPath === '/settings') {
        return 'Settings'
      } else if (currentPath === '/') {
        return 'Login / Register'
      } else if (currentPath === '/data') {
        return 'Data'
      } else if (currentPath === '/input') {
        return 'Input Berita'
      } else if (currentPath === '/about') {
        return 'About'
      } else {
        return 'About'
      }
    },
    title1 () {
      console.log(this.$route)
      const currentPath = this.$route.fullPath
      if (currentPath === '/settings') {
        return 'Settings'
      } else if (currentPath === '/data') {
        return 'Data'
      } else if (currentPath === '/input') {
        return 'Input Berita'
      } else if (currentPath === '/about') {
        return 'About'
      } else {
        return 'Salah Masuk Pak'
      }
    }
  }
}
</script>

<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height: 1.2
</style>
