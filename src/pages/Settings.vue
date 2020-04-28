<template>
  <div class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>Account</q-item-label>
      <q-item clickable v-ripple>
        <q-item-section>
          Nama :
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Email :
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-btn
          color="primary"
          to="/"
          label="Login"/>
        </q-item-section>
      </q-item>
      <q-separator/>
      <q-item-label header>Theme</q-item-label>
      <q-item v-ripple>
        <q-item-section>
          <q-item-label>{{ theme }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn flat round
            @click="$q.dark.toggle()"
            :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  computed: {
    theme () {
      console.log(this.$q.dark.isActive)
      if (this.$q.dark.isActive === false) {
        return 'Light Mode'
      } else {
        return 'Dark Mode'
      }
    }
  }
}
</script>
