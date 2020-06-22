<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-form class="q-pa-md" @submit="submitForm">
        <q-input rounded outlined class="q-mb-md" v-model="username" label="Username" />
        <q-input rounded outlined class="q-mb-md" type="password" v-model="password" label="Password" />

        <div class="row">
          <q-space/>
          <q-btn
          color="primary"
          type="submit"
          label="Login"/>
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    submitForm () {
      this.$axios.post('user/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push('/home')
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    }
  }
}
</script>
