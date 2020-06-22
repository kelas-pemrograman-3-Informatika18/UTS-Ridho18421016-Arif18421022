<template>
  <q-layout view="lHh LpR lff">
    <q-header elevated>
      <q-toolbar :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'" color="blue">
          <q-btn
            color="blue"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <header
          style="color: #2196f3">
            Now News
          </header>
          <q-space/>
          <header
          style="color: #2196f3">
            Admin
          </header>
        </q-toolbar>
    </q-header>
    <q-space/>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      elevated
      :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
      >
      <q-list dark>
        <q-item-label class="bg-info" header >Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          style="color: #2196f3"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="custom-botton row">
        <div class="col">
          Menyajikan Berita
          Terupdate Soal UBL
        </div>
        <div class="col-6">
          Ikuti Kami
        </div>
      </div>
      <q-separator/>
      <div class="custom-botton">
        <div class="flex flex-center">
          © 2020 Now News name, logo and all associated elements (R) and
          © 2020 Cable News Network, Inc. A Time Warner Company.
          All rights reserved. Now News and the Now News logo are registered marks of Cable News Network, Inc., displayed with permission.
          Tentang Kami
          Author By : Ridho Dzaki S
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      cari: null,
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Beranda',
          icon: 'home',
          to: '/home',
          leftDrawerOpen: false
        },
        {
          label: 'Cari Berita',
          icon: 'search',
          to: '/cari',
          leftDrawerOpen: false
        },
        {
          label: 'Data Berita',
          icon: 'assessment',
          to: '/data',
          leftDrawerOpen: false
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings',
          leftDrawerOpen: false
        },
        {
          label: 'About',
          icon: 'help_outline',
          to: '/about',
          leftDrawerOpen: false
        }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.custom-botton
  text-align: center
  padding: 12px
  color: white
  background-color: $grey-10

</style>
<style lang="scss">
.q-drawer {
  .q-router-link--exact-active {
    color: rgb(1, 189, 251) !important;
  }
}
</style>
