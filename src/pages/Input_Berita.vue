<template>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <div class="q-pa-md">
        <q-input
        filled
        v-model="tag"
        label="Tag"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="Judul"
        label="Judul"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        v-model="Keterangan"
        filled
        autogrow
      />
    </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
</template>

<script>
export default {
  data () {
    return {
      Tag: null,
      Judul: null,
      Keterangan: null
    }
  },

  methods: {
    onReset () {
      this.Tag = null
      this.Judul = null
      this.Keterangan = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Input'
      })
      this.$router.push({ name: 'data' })
    }
  }
}
</script>
