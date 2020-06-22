<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'" color="blue">
      <q-toolbar>

        <q-btn
<<<<<<< HEAD
          v-if="$route.fullPath.includes('/')"
          class="absolute-left"
          to="/"
=======
          :v-if="$route.fullPath.includes('{{ title }}')"
          v-go-back.single
>>>>>>> d8f9bdcd8d9ecb754b639f553f49fa4c210371d8
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
<<<<<<< HEAD
      const currentPath = this.$route.fullPath
      if (currentPath === '/settings') {
        return 'Settings'
      } else if (currentPath === '/login') {
        return 'Login'
=======
      console.log(this.$route)
      const currentPath = this.$route.fullPath
      if (currentPath === '/settings') {
        return 'Settings'
      } else if (currentPath === '/') {
        return 'Login / Register'
>>>>>>> d8f9bdcd8d9ecb754b639f553f49fa4c210371d8
      } else if (currentPath === '/data') {
        return 'Data'
      } else if (currentPath === '/input') {
        return 'Input Berita'
      } else if (currentPath === '/about') {
        return 'About'
<<<<<<< HEAD
      } else if (currentPath === '/settingsuser') {
        return 'Settings'
      } else {
        return 'Edit'
=======
      } else {
        return 'About'
>>>>>>> d8f9bdcd8d9ecb754b639f553f49fa4c210371d8
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
