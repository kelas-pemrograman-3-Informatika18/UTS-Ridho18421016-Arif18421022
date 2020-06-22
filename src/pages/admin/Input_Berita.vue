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
        v-model="judul"
        label="Judul"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-editor
        filled
        autogrow
        v-model="isi"
        min-height="5rem" />
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
      tag: null,
      judul: null,
      isi: ''
    }
  },

  methods: {
    onReset () {
      this.tag = null
      this.judul = null
      this.isi = null
    },
    onSubmit () {
      this.$axios.post('berita/input', {
        tag: this.tag,
        judul: this.judul,
        isi: this.isi
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan,
            position: 'top'
          })
          this.$router.push({ name: 'data' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan,
            position: 'top'
          })
        }
      })
    }
  }
}
</script>
