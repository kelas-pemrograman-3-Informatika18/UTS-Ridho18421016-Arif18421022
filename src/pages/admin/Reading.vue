<template>
  <q-page class="flex flex-center">
    <q-card
      class="my-card">
      <q-img
        :src="gambar"
        style="height: 500px"
        basic
      >
        <div class="absolute-bottom text-h6">
          {{ judul }}
        </div>
      </q-img>

      <q-card-section
        v-html="isi">
        {{ isi }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      judul: null,
      isi: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log(this.$route.params.id)
      this.$axios.get('berita/tampilsingle/' + this.$route.params.id)
        .then(res => {
          const data = res.data
          this.judul = data.judul
          this.isi = data.isi
        })
    },
    onReset () {
      this.isi = null
      this.isi = null
    },
    onSubmit () {
      this.$axios.put('kegiatan/edit/' + this.$route.params.id, {
        waktu: this.waktu,
        judul: this.judul,
        keterangan: this.keterangan
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'dashboard' })
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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
</style>
