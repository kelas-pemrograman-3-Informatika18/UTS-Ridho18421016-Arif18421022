<template>
  <q-form @submit="submitForm">
    <q-input
    outline
    v-if="tab == 'register'"
    class="q-mb-md"
    v-model="formData.name"
    label="Name"/>

    <q-input
    outline
    class="q-mb-md"
    v-model="formData.email"
    type="email"
    label="Email"/>

    <q-input
    outline
    class="q-mb-md"
    v-model="formData.password"
    type="password"
    label="Password"/>
    <div class="row">
      <q-space/>
      <q-btn
      color="primary"
      type="submit"
      :label="tab"/>
    </div>
  </q-form>
</template>

<script>
export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
        this.$q.notify({
          type: 'positive',
          message: 'Berhasil Login'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'positive',
          message: 'Berhasil Register'
        })
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style>
</style>
